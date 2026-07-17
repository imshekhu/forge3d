export type Service = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: "spark" | "gift" | "part" | "upload";
};

export type ProjectConcept = {
  title: string;
  category: string;
  description: string;
  visual: "figure" | "mechanical" | "decor";
  accent: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "AI model creation",
    description:
      "Turn a written idea or reference image into an original 3D concept, refined for real-world printing.",
    deliverables: ["Concept development", "Printability review", "Design approval"],
    icon: "spark",
  },
  {
    number: "02",
    title: "Gifts & figures",
    description:
      "Create one-of-one desk pieces, keepsakes, character-inspired figures, and personalized gifts.",
    deliverables: ["Custom sizing", "Colour selection", "Gift-ready options"],
    icon: "gift",
  },
  {
    number: "03",
    title: "Functional parts",
    description:
      "Prototype brackets, organizers, enclosures, adapters, and hard-to-find replacement pieces.",
    deliverables: ["Fit-focused review", "Material guidance", "Small batches"],
    icon: "part",
  },
  {
    number: "04",
    title: "Print your model",
    description:
      "Already have a file? Send your STL, 3MF, OBJ, or STEP model for a local production quote.",
    deliverables: ["File inspection", "Slicing & supports", "Quality check"],
    icon: "upload",
  },
];

export const concepts: ProjectConcept[] = [
  {
    title: "Custom characters",
    category: "AI + 3D print",
    description: "Original figures shaped from your prompt, story, or reference.",
    visual: "figure",
    accent: "#b9ff5a",
  },
  {
    title: "Made-to-fit parts",
    category: "Functional print",
    description: "Practical components for prototypes, repairs, and organization.",
    visual: "mechanical",
    accent: "#54e8ff",
  },
  {
    title: "Statement objects",
    category: "Home & gifting",
    description: "Personalized decor and gifts that cannot be found on a shelf.",
    visual: "decor",
    accent: "#c184ff",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Tell us the idea",
    description:
      "Share a sketch, photo, model file, or just describe what you want to make.",
  },
  {
    number: "02",
    title: "Review & quote",
    description:
      "We check feasibility, recommend an approach, and confirm price and timing.",
  },
  {
    number: "03",
    title: "Approve the plan",
    description:
      "For custom designs, you review the concept before production begins.",
  },
  {
    number: "04",
    title: "Print & collect",
    description:
      "Your piece is printed, inspected, and arranged for local GTA pickup or delivery.",
  },
];

export const faqs = [
  {
    question: "How much does a custom print cost?",
    answer:
      "Every project is different. Size, material, print time, model preparation, and finishing all affect the price. Send the details and we’ll provide a clear quote before any work begins.",
  },
  {
    question: "Can you create a model if I only have an idea?",
    answer:
      "Yes. We use AI-assisted modelling as a starting point, then review and prepare the design for printing. Complex engineering parts may require accurate measurements or a production-ready CAD file.",
  },
  {
    question: "What files can I send?",
    answer:
      "STL, 3MF, OBJ, STEP, and STP are welcome. You can also send PNG, JPG, or WEBP reference images. The quote form accepts files up to 4 MB.",
  },
  {
    question: "How quickly can I get my print?",
    answer:
      "Timing depends on design work, print duration, and the current queue. Let us know if you have a target date; we’ll confirm what is realistic in your quote.",
  },
  {
    question: "Where do you serve?",
    answer:
      "Forge3D works with local customers across the Greater Toronto Area. Pickup or local delivery details are confirmed with each order.",
  },
  {
    question: "Can you copy any character or product?",
    answer:
      "We only accept work you have the right to reproduce. We may decline copyrighted, trademarked, unsafe, regulated, or weapon-related requests.",
  },
];
