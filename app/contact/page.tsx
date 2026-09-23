import React from "react";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="py-10">
      <div className="bg-slate-900 text-white py-12 px-4 mb-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-black">Contact &amp; Location</h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Plot No 10, Canal Industrial Estate, Dehlonsahnewal Road, Tibba, Ludhiana, Punjab - 141120
        </p>
      </div>
      <Contact />
    </div>
  );
}
