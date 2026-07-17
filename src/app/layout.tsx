import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://forge3d.ca",
  ),
  title: {
    default: "Forge3D | Custom 3D Printing in the GTA",
    template: "%s | Forge3D",
  },
  description:
    "Turn an idea, image, or 3D file into a physical object. Forge3D offers AI-assisted modelling and precision 3D printing across the Greater Toronto Area.",
  keywords: [
    "3D printing GTA",
    "custom 3D printing Toronto",
    "AI 3D modelling",
    "3D printed gifts",
    "prototype printing",
    "Bambu Lab printing",
  ],
  authors: [{ name: "Forge3D" }],
  creator: "Forge3D",
  category: "3D printing",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Forge3D",
    title: "Forge3D | Your idea, made real.",
    description:
      "AI-assisted custom modelling and precision 3D printing for the GTA.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge3D | Your idea, made real.",
    description:
      "AI-assisted custom modelling and precision 3D printing for the GTA.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
