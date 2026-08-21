import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KINGMAKERS | Commercial Brokers",
  description:
    "Strategic Introductions, Private Commercial Opportunities & Institutional Connections. We Make Markets Move.",
  keywords: [
      "Commercial Brokers",
      "Dubai",
      "Business Introductions",
      "Private Opportunities",
      "Institutional Connections",
    ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "KINGMAKERS | Commercial Brokers",
    description: "Strategic Introductions, Private Commercial Opportunities & Institutional Connections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
