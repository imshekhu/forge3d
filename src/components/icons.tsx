import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Spark(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m12 2 1.25 4.1a6.5 6.5 0 0 0 4.4 4.4L22 12l-4.35 1.5a6.5 6.5 0 0 0-4.4 4.4L12 22l-1.5-4.1a6.5 6.5 0 0 0-4.4-4.4L2 12l4.1-1.5a6.5 6.5 0 0 0 4.4-4.4L12 2Z" />
    </svg>
  );
}

export function Gift(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 9h18v4H3zM5 13h14v8H5zM12 9v12M12 9H7.5a2.5 2.5 0 1 1 2.5-2.5L12 9Zm0 0h4.5A2.5 2.5 0 1 0 14 6.5L12 9Z" />
    </svg>
  );
}

export function Cube(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 7 9 5 9-5M3 7v10l9 5 9-5V7M12 12v10" />
    </svg>
  );
}

export function Upload(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 16V3m0 0L7 8m5-5 5 5M4 14v6h16v-6" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Paperclip(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m20.5 11.5-8.8 8.8a6 6 0 0 1-8.5-8.5l9.5-9.5a4 4 0 0 1 5.7 5.7l-9.6 9.5a2 2 0 1 1-2.8-2.8l8.8-8.8" />
    </svg>
  );
}

export function Printer(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 14h12v7H6zM18 12h.01" />
    </svg>
  );
}
