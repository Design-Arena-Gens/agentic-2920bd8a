import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  title: "PDF Studio Pro | Smart PDF Toolkit",
  description:
    "Transform your documents with a premium PDF toolkit featuring smart automation, AI enhancements, and rapid workflows in a dynamic, modern interface."
};

export const viewport: Viewport = {
  themeColor: "#0d0c1d",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
