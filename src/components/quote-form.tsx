"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useId,
  useRef,
  useState,
} from "react";
import { ArrowRight, Check, Paperclip } from "@/components/icons";

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const acceptedExtensions = [
  ".stl",
  ".3mf",
  ".obj",
  ".step",
  ".stp",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
];

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileId = useId();
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setFileName("");
      return;
    }

    const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
    if (!acceptedExtensions.includes(extension)) {
      event.target.value = "";
      setFileName("");
      setStatus({
        state: "error",
        message: "Please attach a supported model or image file.",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      event.target.value = "";
      setFileName("");
      setStatus({
        state: "error",
        message: "The attached file must be 4 MB or smaller.",
      });
      return;
    }

    setFileName(file.name);
    setStatus({ state: "idle" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "submitting" });

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        body: data,
      });
      const result = (await response.json()) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.message || "We couldn’t send your request.");
      }

      setStatus({
        state: "success",
        message:
          result.message ||
          "Your project request is in. We’ll be in touch shortly.",
      });
      formRef.current?.reset();
      setFileName("");
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="form-success" role="status">
        <span className="success-icon">
          <Check width={34} height={34} />
        </span>
        <p className="eyebrow">Transmission received</p>
        <h3>Let&apos;s make something real.</h3>
        <p>{status.message}</p>
        <button
          className="text-button"
          type="button"
          onClick={() => setStatus({ state: "idle" })}
        >
          Send another request <ArrowRight width={18} height={18} />
        </button>
      </div>
    );
  }

  return (
    <form
      className="quote-form"
      ref={formRef}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      aria-label="Project quote request"
    >
      <div className="form-grid">
        <label className="field">
          <span>Name *</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            placeholder="Your name"
            required
          />
        </label>
        <label className="field">
          <span>Email *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            placeholder="you@email.com"
            required
          />
        </label>
        <label className="field">
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="Optional"
          />
        </label>
        <label className="field">
          <span>GTA location *</span>
          <input
            name="location"
            type="text"
            autoComplete="address-level2"
            maxLength={80}
            placeholder="City or neighbourhood"
            required
          />
        </label>
        <label className="field field-full">
          <span>What can we help with? *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option value="ai-model">Create a model from my idea</option>
            <option value="gift-figure">Personalized gift or figure</option>
            <option value="functional-part">Functional or replacement part</option>
            <option value="print-model">Print my existing model</option>
            <option value="other">Something else</option>
          </select>
        </label>
        <label className="field field-full">
          <span>Project details *</span>
          <textarea
            name="details"
            rows={5}
            minLength={20}
            maxLength={3000}
            placeholder="What are you making? Include approximate dimensions, quantity, preferred colour/material, and how it will be used."
            required
          />
        </label>
        <label className="field">
          <span>Approximate size</span>
          <input
            name="dimensions"
            type="text"
            maxLength={80}
            placeholder="e.g. 120 × 80 × 50 mm"
          />
        </label>
        <label className="field">
          <span>Target date</span>
          <input name="targetDate" type="date" />
        </label>
      </div>

      <div className="file-row">
        <div>
          <p>Reference or model file</p>
          <span>STL, 3MF, OBJ, STEP, STP, PNG, JPG or WEBP · Max 4 MB</span>
        </div>
        <label className="file-button" htmlFor={fileId}>
          <Paperclip width={18} height={18} />
          {fileName || "Attach file"}
        </label>
        <input
          className="sr-only"
          id={fileId}
          name="attachment"
          type="file"
          accept={acceptedExtensions.join(",")}
          onChange={handleFile}
        />
      </div>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent">
        <input name="consent" type="checkbox" value="yes" required />
        <span>
          I agree that Forge3D may use these details to review and respond to my
          request. I confirm I have the right to reproduce any submitted
          material. *
        </span>
      </label>

      {status.state === "error" && (
        <p className="form-error" role="alert">
          {status.message}
        </p>
      )}

      <div className="form-submit-row">
        <p>We typically reply within 1–2 business days.</p>
        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={status.state === "submitting"}
        >
          {status.state === "submitting"
            ? "Sending request…"
            : "Send project request"}
          {status.state !== "submitting" && <ArrowRight />}
        </button>
      </div>
    </form>
  );
}
