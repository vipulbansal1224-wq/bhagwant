"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X, Bike, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              Plot 10, Canal Industrial Estate, Tibba, Ludhiana - 141120
            </span>
            <span className="flex items-center gap-1 text-slate-300 hidden md:inline-flex">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Mon - Sat: 09:30 AM - 06:30 PM (Sun Closed)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call For Wholesale Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <Bike className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight block">
                BHAGWANT <span className="text-blue-600">CYCLES</span>
              </span>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase block">
                Jetbird Bikes • Ludhiana
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/products" className="hover:text-blue-600 transition-colors">
              Bicycle Catalog
            </Link>
            <Link href="/#gallery" className="hover:text-blue-600 transition-colors">
              Factory Gallery
            </Link>
            <Link href="/#reviews" className="hover:text-blue-600 transition-colors">
              Reviews (5.0★)
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call to Action button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm"
            >
              Get Bulk Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600"
          >
            Bicycle Catalog
          </Link>
          <Link
            href="/#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600"
          >
            Factory Gallery
          </Link>
          <Link
            href="/#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600"
          >
            Reviews (5.0★)
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600"
          >
            Contact & Location
          </Link>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow text-center block"
            >
              Get Bulk Quote Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
