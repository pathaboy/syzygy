import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syzygy",
  description:
    "SYZYGY. Where raw footage meets the finish line. Reliable, fast, and thoughtful video post-production for teams that ship content regularly.",

  openGraph: {
    title: "Syzygy",
    description:
      "SYZYGY. Where raw footage meets the finish line. Reliable, fast, and thoughtful video post-production for teams that ship content regularly.",
    url: "https://www.syzygymedia.in",
    siteName: "Syzygy",
    images: [
      {
        url: "https://www.syzygymedia.in/syzygy-og.png",
        width: 1200,
        height: 630,
        alt: "Syzygy Video Post Production",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Syzygy",
    description:
      "SYZYGY. Where raw footage meets the finish line. Reliable, fast, and thoughtful video post-production for teams that ship content regularly.",
    images: ["https://www.syzygymedia.in/syzygy-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
