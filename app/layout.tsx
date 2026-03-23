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
      "Swiftly — AI-Powered Mobile App Development for SMBs. Live in 6 Weeks.",
    template: "%s | Swiftly",
  },
  description:
    "Swiftly is an AI-native mobile app agency that builds iOS and Android apps for growing businesses — live in 6 weeks, guaranteed. Fixed pricing from $8,500.",
  keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "app development for small business",
    "AI app agency",
    "mobile app agency",
    "fast app development",
    "cross-platform app development",
    "React Native development",
    "Flutter development",
    "SMB mobile apps",
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
      "Swiftly — AI-Powered Mobile App Development for SMBs. Live in 6 Weeks.",
    description:
      "We build iOS and Android apps for growing businesses — faster than any agency, without the enterprise price tag. Fixed pricing from $8,500. 6-week delivery guarantee.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swiftly — Mobile Apps for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Swiftly — AI-Powered Mobile App Development for SMBs. Live in 6 Weeks.",
    description:
      "We build iOS and Android apps for growing businesses — faster than any agency, without the enterprise price tag. 6-week delivery guarantee.",
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
