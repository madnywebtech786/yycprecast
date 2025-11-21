import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { lazy } from "react";
import Footer from "./sections/Footer";

const Navigation = lazy(() => import("./sections/Navigation"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yycprecast.ca"),

  // ⭐ CLEAN SEO TITLE
  title: {
    default:
      "YYC Precast | Precast Concrete Steps, Window Wells & Installations in Calgary",
    template: "%s | YYC Precast",
  },

  // ⭐ CLEAN SEO DESCRIPTION
  description:
    "YYC Precast provides high-quality precast concrete steps, window wells, railings, and installation services in Calgary, Alberta. Durable, affordable, and professionally installed for homes and commercial projects.",

  // ⭐ CLEAN SEO KEYWORDS
  keywords: [
    "precast concrete Calgary",
    "concrete steps Calgary",
    "precast steps Calgary",
    "window wells Calgary",
    "precast installation Calgary",
    "concrete railings Calgary",
    "YYC Precast",
  ],

  // ⭐ Canonical URL for SEO
  alternates: {
    canonical: "https://yycprecast.ca",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ⭐ Local Business Schema (Huge SEO Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "YYC Precast",
              url: "https://yycprecast.ca",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Calgary",
                addressRegion: "AB",
                addressCountry: "CA",
              },
              description:
                "Precast concrete steps, window wells, railings, and installation services in Calgary.",
              telephone: "+14038521114", // your number
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden dark:bg-white`}
      >
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
