"use client";

import React from "react";
import { CheckCircle2, Factory, Award, Compass } from "lucide-react";

export default function About() {
  const highlights = [
    "High-Tensile Steel & Alloy Frame Fabrication",
    "Dual Disc Brake & Precision Multi-Speed Gearing",
    "Direct Wholesale & OEM Manufacturing Partner",
    "Comprehensive Quality Assurance & Durability Testing",
    "Ergonomic Saddle & Shock-Absorbing Suspension",
    "Pan-India Distribution & Bulk Supply Network",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Flex Layout with Distinct Left Images & Right Text Gap */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 xl:gap-28">
          
          {/* Left Side: Images & Badges (Width Constrained & Pushed Left) */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2 flex items-center justify-center aspect-[4/3] sm:h-56">
                  <img
                    src="https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-5037x1uybf.jpg"
                    alt="Jetbird Mountain Bike Full View"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-blue-950 text-white p-5 rounded-2xl shadow-xl space-y-2">
                  <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                    <Factory className="w-4 h-4" />
                    Ludhiana Cycle Hub
                  </div>
                  <p className="text-xl font-black text-white">100% Indian Made</p>
                  <p className="text-[11px] text-slate-300">Engineered for Indian road conditions.</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200 text-orange-950 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-orange-600 text-sm">
                    <Award className="w-4 h-4" />
                    Top Rated Dealer
                  </div>
                  <p className="text-3xl font-black text-slate-900">5.0★</p>
                  <p className="text-[11px] text-slate-600">Rated 5 Stars on Justdial with 100% Client Feedback.</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2 flex items-center justify-center aspect-[4/3] sm:h-56">
                  <img
                    src="https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-mq7qfklcki.jpg"
                    alt="Jetbird Red Trail MTB Full View"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Text & Address (Pushed Right with Clear Middle Gap) */}
          <div className="w-full lg:w-[50%] space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200">
              <Compass className="w-4 h-4" />
              About Bhagwant Cycle Industries
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Crafting Superior Bicycles &amp; Riding Experiences Under <span className="text-blue-600">Jetbird Bikes</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Situated in the heart of Ludhiana's industrial belt (Canal Industrial Estate, Tibba), **Bhagwant Cycle Industries** is a leading manufacturer, wholesaler, and dealer of premium bicycles. Under our flagship brand **Jetbird Bikes**, we design cycles engineered for performance, safety, and durability.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Whether you are looking for rugged All-Terrain Mountain Bikes (MTBs) to tackle off-road trails, sleek hybrid commuters for daily city travel, lightweight road bikes, or safe, colorful bicycles for children, Bhagwant Cycle Industries delivers unmatched craftsmanship at direct factory prices.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Strip */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-xs text-slate-500 font-medium">Factory Address</p>
                <p className="text-sm font-bold text-slate-900">
                  Plot No 10, Canal Industrial Estate, Dehlonsahnewal Road, Tibba, Ludhiana - 141120
                </p>
              </div>
              <a
                href="tel:+919876543210"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow transition-colors"
              >
                Call Factory Directly
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
