import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bhagwant Cycle Industries (Jetbird Bikes) - Ludhiana Bicycle Manufacturer",
  description:
    "Bhagwant Cycle Industries (Jetbird Bikes) in Tibba, Ludhiana. Manufacturer & wholesaler of Mountain Bikes (MTB), Hybrid Cycles, Kids Bikes, E-Bikes, and Cycle Accessories.",
  keywords: [
    "Bhagwant Cycle Industries",
    "Jetbird Bikes",
    "Ludhiana Bicycle Manufacturer",
    "Bicycle Dealers Ludhiana",
    "Wholesale MTB Bicycles",
    "Cycle Factory Tibba Ludhiana",
    "Kids Bicycles Ludhiana",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
