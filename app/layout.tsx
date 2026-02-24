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
  title: "Literary Fest 2026 | Celebrating Literature, Voices & Ideas",
  description: "Join us for a two-day literary fest featuring debates, poetry, discussions, and stories. March 13-14, 2026.",
  keywords: ["literary fest", "college event", "poetry", "debates", "literature", "2026"],
  authors: [{ name: "Literary Fest Committee" }],
  openGraph: {
    title: "Literary Fest 2026 | Celebrating Literature, Voices & Ideas",
    description: "A two-day literary fest bringing together debates, poetry, discussions, and stories.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Literary Fest 2026",
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
      <body className="antialiased min-h-screen flex flex-col font-sans">
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
