import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    icon: "/logo.jpg",
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
      <body className={`${geistSans.variable} antialiased bg-dark text-foreground`}>
        {children}
      </body>
    </html>
  );
}
