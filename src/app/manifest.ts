import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return {
    name: "Forge3D",
    short_name: "Forge3D",
    description:
      "AI-assisted custom modelling and precision 3D printing in the GTA.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#0a0d0b",
    theme_color: "#b9ff5a",
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
