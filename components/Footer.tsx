"use client";

import React from "react";
import Link from "next/link";
import { Bike, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight leading-tight block">
                  BHAGWANT <span className="text-blue-500">CYCLES</span>
                </span>
                <span className="text-[10px] font-bold text-orange-500 tracking-wider uppercase block">
                  Jetbird Bikes • Ludhiana
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Bhagwant Cycle Industries (Jetbird Bikes) is a premier manufacturer and distributor of high-performance Mountain Bikes (MTB), Road Cycles, Hybrid Commuters, Kids Bicycles, and Electric E-Bikes based in Ludhiana, Punjab.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300 font-semibold">
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400">
                ★ 5.0 Rated on Justdial
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400">
                100% Verified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Factory</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Bicycle Catalog</Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">Factory Gallery</Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">Customer Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Wholesale Contact</Link>
              </li>
            </ul>
          </div>

          {/* Bicycle Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product Categories</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li className="hover:text-white transition-colors">Mountain Bikes (29T &amp; 27.5T MTB)</li>
              <li className="hover:text-white transition-colors">Hybrid &amp; City Commuter Cycles</li>
              <li className="hover:text-white transition-colors">Kids &amp; Junior Bicycles (20T)</li>
              <li className="hover:text-white transition-colors">Lithium Electric E-Bikes</li>
              <li className="hover:text-white transition-colors">Alloy Rims &amp; Cycle Spare Parts</li>
              <li className="hover:text-white transition-colors">OEM Custom Brand Manufacturing</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Ludhiana Factory</h4>
            <div className="text-xs space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                Plot No 10, Canal Industrial Estate, Dehlonsahnewal Road, Tibba, Ludhiana - 141120
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                Mon - Sat: 09:30 AM - 06:30 PM (Sun Closed)
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                Inquiry: +91 98765 43210
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Bhagwant Cycle Industries (Jetbird Bikes). All rights reserved.</p>
          <p className="text-slate-500">Designed &amp; Developed for Ludhiana Cycle Manufacturing Hub.</p>
        </div>
      </div>
    </footer>
  );
}
