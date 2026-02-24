import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahithyotsav 2026 | A Celebration of Literature",
  description: "Join us for Sahithyotsav — a two-day literary fest featuring debates, poetry, discussions, and stories. March 13-14, 2026.",
  keywords: ["sahithyotsav", "literary fest", "college event", "poetry", "debates", "literature", "2026"],
  authors: [{ name: "Sahithyotsav Committee" }],
  openGraph: {
    title: "Sahithyotsav 2026 | A Celebration of Literature",
    description: "A two-day literary fest bringing together debates, poetry, discussions, and stories that inspire and transform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahithyotsav 2026",
    description: "A two-day literary fest bringing together debates, poetry, discussions, and stories.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#0a0e1a] text-[#e8e4dd]">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
