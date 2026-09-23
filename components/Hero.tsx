"use client";

import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, Truck, Factory, Award, ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-500/40 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-md">
              <Award className="w-4 h-4 text-orange-400" />
              Direct Manufacturer • Ludhiana Cycle Hub
              <span className="bg-orange-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ml-1">
                Jetbird Bikes
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              BHAGWANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">CYCLE INDUSTRIES</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Pioneering high-performance bicycles, Mountain Bikes (MTB), Road Bikes, Hybrid &amp; Kids Cycles manufactured in Ludhiana. Built with high-tensile steel frames, precision gearing, and ISO certified quality.
            </p>

            {/* Badges / Ratings */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold">5.0 / 5.0 Rating</span>
                <span className="text-xs text-slate-400">(7 Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 text-sm font-semibold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                Verified Business
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/products"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-3 text-base"
              >
                Explore Jetbird Catalog
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/919876543210?text=Hi%20Bhagwant%20Cycle%20Industries,%20I%20want%20to%20inquire%20about%20bicycle%20wholesale%20prices."
                target="_blank"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 text-base border border-emerald-500/30"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                WhatsApp Quick Inquiry
              </Link>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Direct Factory</p>
                  <p className="text-[11px] text-slate-400">Wholesale Prices</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">100% Tested</p>
                  <p className="text-[11px] text-slate-400">Premium Alloy</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Pan-India</p>
                  <p className="text-[11px] text-slate-400">Bulk Shipping</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Banner Card / Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800/90 shadow-2xl p-4">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden group">
                <img
                  src="https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-bc70rtmnj3.jpg"
                  alt="Bhagwant Cycle Industries Jetbird Bikes Showroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60">
                  <p className="text-xs uppercase font-bold text-orange-400 tracking-wider">Official Factory Unit</p>
                  <h3 className="text-lg font-bold">Jetbird Bikes Wholesale Outlet</h3>
                  <p className="text-xs text-slate-300">Tibba, Canal Industrial Estate, Ludhiana</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-4 rounded-2xl shadow-xl font-bold text-center border border-white/20 rotate-3">
                <span className="text-2xl font-black block leading-none">5.0★</span>
                <span className="text-[10px] uppercase tracking-wider block mt-1">Verified Rated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
