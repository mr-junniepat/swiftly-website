import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = "https://swiftly-website-snowy.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070707",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Swiftly — We Fix Vibe-Coded Apps. Mobile, Web & Desktop. Live in 6 Weeks.",
    template: "%s | Swiftly",
  },
  description:
    "Swiftly fixes vibe-coded apps and builds production-ready mobile, web, and desktop software for growing businesses. From AI prototype to MVP in 6 weeks, guaranteed. Fixed pricing from $8,500.",
  keywords: [
    "fix vibe coded app",
    "vibe coding to production",
    "AI prototype to MVP",
    "mobile app development",
    "web app development",
    "desktop app development",
    "iOS app development",
    "Android app development",
    "Next.js development",
    "React Native development",
    "Flutter development",
    "Electron app development",
    "fix cursor code",
    "fix bolt app",
    "AI generated code cleanup",
    "production ready code",
    "app development for small business",
    "AI app agency",
    "fast app development",
    "affordable app development",
  ],
  authors: [{ name: "Swiftly" }],
  creator: "Swiftly",
  publisher: "Swiftly",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Swiftly",
    title:
      "Swiftly — We Fix Vibe-Coded Apps. Mobile, Web & Desktop. Live in 6 Weeks.",
    description:
      "We fix vibe-coded apps and build production-ready mobile, web, and desktop software — faster than any agency. Fixed pricing from $8,500. 6-week delivery guarantee.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swiftly — Fix Vibe-Coded Apps. Mobile, Web & Desktop.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Swiftly — We Fix Vibe-Coded Apps. Mobile, Web & Desktop. Live in 6 Weeks.",
    description:
      "We fix vibe-coded apps and build production-ready mobile, web, and desktop software. From AI prototype to MVP in 6 weeks. Fixed pricing from $8,500.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
