// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google fonts using next/font (which is SSR-safe)
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Optional: SEO metadata (used by Next.js <head>)
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// RootLayout wraps all pages and persists across route changes
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
