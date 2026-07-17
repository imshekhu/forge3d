import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Forge3D handles information submitted through this site.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Forge3D / Information</p>
        <h1>Privacy policy</h1>
        <p className="legal-updated">Effective July 17, 2026</p>

        <section className="legal-section">
          <h2>What we collect</h2>
          <p>
            When you request a quote, Forge3D collects the contact and project
            information you provide. This can include your name, email, phone
            number, GTA location, project description, target date, dimensions,
            and uploaded reference or model files.
          </p>
        </section>

        <section className="legal-section">
          <h2>How we use it</h2>
          <p>
            We use this information only to evaluate your request, communicate
            with you, prepare a quote, produce approved work, provide customer
            service, and meet legal or accounting obligations. We do not sell
            personal information.
          </p>
        </section>

        <section className="legal-section">
          <h2>Service providers</h2>
          <p>
            The website may use hosting, email delivery, spam prevention, and
            privacy-respecting analytics providers. Those providers process
            information only as needed to deliver their services. Uploaded
            files may be transmitted through the configured email provider.
          </p>
        </section>

        <section className="legal-section">
          <h2>Retention and security</h2>
          <p>
            Quote records are retained only as long as reasonably needed for
            the project, business records, dispute handling, or legal
            requirements. Reasonable safeguards are used, but no internet
            transmission or storage system can be guaranteed completely secure.
          </p>
        </section>

        <section className="legal-section">
          <h2>Your choices</h2>
          <p>
            You may ask to access or correct your information, or request
            deletion where the law allows. Use the project form and identify
            the request as a privacy enquiry. We may need to verify your
            identity before completing a request.
          </p>
        </section>

        <section className="legal-section">
          <h2>Policy updates</h2>
          <p>
            This policy may be updated as Forge3D&apos;s services change. The
            effective date above identifies the current version.
          </p>
        </section>

        <Link className="legal-back" href="/">
          Return to Forge3D <ArrowRight width={18} height={18} />
        </Link>
      </div>
    </main>
  );
}
