import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Terms & Project Policies",
  description:
    "Forge3D quote, intellectual property, production, and project policies.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Forge3D / Information</p>
        <h1>Terms & policies</h1>
        <p className="legal-updated">Effective July 17, 2026</p>

        <section className="legal-section">
          <h2>Quotes and approval</h2>
          <p>
            Website submissions are requests, not confirmed orders. Pricing,
            scope, material, timing, pickup or delivery, and any required
            deposit are confirmed in writing before production. Quotes may
            expire and can change when project requirements change.
          </p>
        </section>

        <section className="legal-section">
          <h2>Design and print limitations</h2>
          <p>
            Additive manufacturing has visible layer lines and normal variations
            in colour, texture, dimensions, and surface finish. We review files
            for likely printability but cannot guarantee that customer-supplied
            designs are fit for a particular purpose. Functional, load-bearing,
            food-contact, heat-sensitive, or safety-critical uses require
            explicit review and may be declined.
          </p>
        </section>

        <section className="legal-section">
          <h2>Intellectual property</h2>
          <p>
            You must own or have permission to reproduce every design, image,
            logo, character, or file you submit. You retain rights you hold in
            your submitted materials. Forge3D may decline work that appears to
            infringe copyright, trademark, privacy, publicity, or other rights.
            Forge3D will not publish your project as portfolio work without
            permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>Prohibited requests</h2>
          <p>
            We do not accept unlawful, dangerous, regulated, hateful, sexually
            exploitative, or weapon-related projects. This includes functional
            weapons and components intended to facilitate harm. We may reject a
            project at our discretion.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes and cancellations</h2>
          <p>
            Custom work may become non-refundable once modelling, material
            preparation, or printing begins. Changes after approval can require
            a revised quote and schedule. Any cancellation terms and deposit
            treatment will be stated in the accepted project quote.
          </p>
        </section>

        <section className="legal-section">
          <h2>Inspection and issue reporting</h2>
          <p>
            Please inspect the item at handoff and report production defects
            promptly. Remedies are assessed based on the approved design,
            intended use disclosed before production, and the nature of the
            issue. Normal additive-manufacturing characteristics are not
            defects.
          </p>
        </section>

        <section className="legal-section">
          <h2>Local service</h2>
          <p>
            Forge3D currently serves the Greater Toronto Area. Pickup does not
            imply a public retail storefront. Exact handoff or local delivery
            arrangements are provided privately for each confirmed order.
          </p>
        </section>

        <Link className="legal-back" href="/">
          Return to Forge3D <ArrowRight width={18} height={18} />
        </Link>
      </div>
    </main>
  );
}
