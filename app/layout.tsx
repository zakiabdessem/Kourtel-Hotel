import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Hotel kourtel",
  description: "Hotel kourtel Batna 4 starts official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
       
      </head>

      <body className="bg-white">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between py-4 pb-0 mt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
