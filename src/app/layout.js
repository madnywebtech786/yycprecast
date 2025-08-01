import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { lazy } from "react";
import Footer from "./sections/Footer";
const Navigation = lazy(() => import("./sections//Navigation"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YYC PRECAST",
  description: "YYC PRECAST WEBSITE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-gray-900`}
      >
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
