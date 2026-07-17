import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Vercel Functions accept request bodies up to 4.5 MB. Keep enough room for
// multipart form fields around the file payload.
const MAX_FILE_SIZE = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set([
  "stl",
  "3mf",
  "obj",
  "step",
  "stp",
  "png",
  "jpg",
  "jpeg",
  "webp",
]);
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

type RateRecord = {
  count: number;
  expiresAt: number;
};

const rateLimitStore = new Map<string, RateRecord>();

function textValue(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(ip: string) {
  const now = Date.now();

  if (rateLimitStore.size > 500) {
    for (const [key, record] of rateLimitStore.entries()) {
      if (record.expiresAt <= now) rateLimitStore.delete(key);
    }
  }

  const existing = rateLimitStore.get(ip);
  if (!existing || existing.expiresAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      expiresAt: now + RATE_LIMIT_WINDOW,
    });
    return false;
  }

  existing.count += 1;
  return existing.count > RATE_LIMIT_MAX;
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { message: "The submitted form could not be read." },
      { status: 400 },
    );
  }

  // Bots commonly complete visually hidden fields. Return a generic success so
  // the endpoint does not reveal the filter.
  if (textValue(form, "website")) {
    return NextResponse.json({
      message: "Your request has been received.",
    });
  }

  const name = textValue(form, "name");
  const email = textValue(form, "email");
  const phone = textValue(form, "phone");
  const location = textValue(form, "location");
  const service = textValue(form, "service");
  const details = textValue(form, "details");
  const dimensions = textValue(form, "dimensions");
  const targetDate = textValue(form, "targetDate");
  const consent = textValue(form, "consent");
  const attachmentValue = form.get("attachment");
  const attachment =
    attachmentValue instanceof File && attachmentValue.size > 0
      ? attachmentValue
      : null;

  if (
    name.length < 2 ||
    name.length > 80 ||
    !validateEmail(email) ||
    email.length > 120 ||
    location.length < 2 ||
    location.length > 80 ||
    !service ||
    details.length < 20 ||
    details.length > 3000 ||
    phone.length > 30 ||
    dimensions.length > 80 ||
    consent !== "yes"
  ) {
    return NextResponse.json(
      {
        message:
          "Please check the required fields and make sure your project description has at least 20 characters.",
      },
      { status: 400 },
    );
  }

  let encodedAttachment:
    | { filename: string; content: string }
    | undefined;

  if (attachment) {
    const extension = attachment.name.split(".").pop()?.toLowerCase() || "";
    if (
      !ALLOWED_EXTENSIONS.has(extension) ||
      attachment.size > MAX_FILE_SIZE
    ) {
      return NextResponse.json(
        {
          message:
            "The attachment must be a supported model or image file no larger than 4 MB.",
        },
        { status: 400 },
      );
    }

    encodedAttachment = {
      filename: attachment.name.replace(/[^\w.\- ()]/g, "_").slice(0, 120),
      content: Buffer.from(await attachment.arrayBuffer()).toString("base64"),
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const quoteToEmail = process.env.QUOTE_TO_EMAIL;
  const quoteFromEmail =
    process.env.QUOTE_FROM_EMAIL || "Forge3D Quotes <onboarding@resend.dev>";

  if (!resendApiKey || !quoteToEmail) {
    return NextResponse.json(
      {
        message:
          "Quote delivery is not configured yet. Please try again after the site owner completes setup.",
      },
      { status: 503 },
    );
  }

  const serviceNames: Record<string, string> = {
    "ai-model": "Create a model from an idea",
    "gift-figure": "Personalized gift or figure",
    "functional-part": "Functional or replacement part",
    "print-model": "Print an existing model",
    other: "Other",
  };
  const reference = `F3D-${Date.now().toString(36).toUpperCase()}`;

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: quoteFromEmail,
      to: [quoteToEmail],
      reply_to: email,
      subject: `[${reference}] New Forge3D request — ${serviceNames[service] || service}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#172016">
          <p style="font-size:12px;color:#667064">PROJECT REFERENCE: ${reference}</p>
          <h1 style="font-size:28px">New Forge3D project request</h1>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><b>Name</b></td><td style="padding:10px;border-bottom:1px solid #ddd">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><b>Email</b></td><td style="padding:10px;border-bottom:1px solid #ddd">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><b>Phone</b></td><td style="padding:10px;border-bottom:1px solid #ddd">${escapeHtml(phone || "Not provided")}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><b>Location</b></td><td style="padding:10px;border-bottom:1px solid #ddd">${escapeHtml(location)}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><b>Service</b></td><td style="padding:10px;border-bottom:1px solid #ddd">${escapeHtml(serviceNames[service] || service)}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><b>Dimensions</b></td><td style="padding:10px;border-bottom:1px solid #ddd">${escapeHtml(dimensions || "Not provided")}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><b>Target date</b></td><td style="padding:10px;border-bottom:1px solid #ddd">${escapeHtml(targetDate || "Not provided")}</td></tr>
          </table>
          <h2 style="font-size:18px;margin-top:28px">Project details</h2>
          <p style="white-space:pre-wrap;line-height:1.6;background:#f4f6f1;padding:18px">${escapeHtml(details)}</p>
          <p style="font-size:12px;color:#667064">The customer confirmed consent and rights to reproduce submitted material.</p>
        </div>
      `,
      attachments: encodedAttachment ? [encodedAttachment] : undefined,
    }),
  });

  if (!emailResponse.ok) {
    const requestId = emailResponse.headers.get("x-request-id");
    console.error("Quote email delivery failed", {
      status: emailResponse.status,
      requestId,
    });
    return NextResponse.json(
      {
        message:
          "Your request could not be delivered right now. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: `Your request is in. Reference ${reference}. We’ll reply within 1–2 business days.`,
  });
}
