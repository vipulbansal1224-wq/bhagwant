import React from "react";
import About from "@/components/About";
import Gallery from "@/components/Gallery";

export default function AboutPage() {
  return (
    <div className="py-10">
      <div className="bg-slate-900 text-white py-12 px-4 mb-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-black">About Bhagwant Cycle Industries</h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Premier Manufacturer of Jetbird Bikes • Canal Industrial Estate, Tibba, Ludhiana
        </p>
      </div>
      <About />
      <Gallery />
    </div>
  );
}
