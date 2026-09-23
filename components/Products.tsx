"use client";

import React, { useState } from "react";
import { Bike, Sparkles, Filter, Check, ShoppingCart, MessageSquare, Info } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: "mtb" | "road" | "kids" | "ebike" | "parts";
  tagline: string;
  frame: string;
  gears: string;
  brakes: string;
  wheelSize: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export const productsData: Product[] = [
  {
    id: "jetbird-apex-29",
    name: "Jetbird Apex 29T Dual Disc MTB",
    category: "mtb",
    tagline: "Pro All-Terrain Mountain Bike with Alloy Rims",
    frame: "High-Tensile Steel 18.5\" Hardtail",
    gears: "21 Speed Precision Gearing",
    brakes: "Dual Mechanical Disc Brakes",
    wheelSize: "29 Inches Double Wall Alloy",
    image: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-5037x1uybf.jpg",
    badge: "Best Seller",
    popular: true,
  },
  {
    id: "jetbird-thunder-27.5",
    name: "Jetbird Thunder 27.5T Trail MTB",
    category: "mtb",
    tagline: "Rugged Off-Road Bike with Front Suspension Fork",
    frame: "Ergonomic Steel Frame",
    gears: "7 Speed Rapid Shifter",
    brakes: "Dual Disc Brakes",
    wheelSize: "27.5 Inches Nylon Tires",
    image: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-mq7qfklcki.jpg",
    badge: "Popular MTB",
    popular: true,
  },
  {
    id: "jetbird-city-stride-26",
    name: "Jetbird City Stride Hybrid 26T",
    category: "road",
    tagline: "Comfortable Urban Commuter for Daily Riding",
    frame: "Lightweight Rigid Steel",
    gears: "Single Speed / Multi-Speed Option",
    brakes: "Power V-Brakes / Disc",
    wheelSize: "26 x 1.95 City Tread",
    image: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-bc70rtmnj3.jpg",
    badge: "Urban Choice",
  },
  {
    id: "jetbird-junior-flyer-20",
    name: "Jetbird Junior Flyer 20T Kids Cycle",
    category: "kids",
    tagline: "Safe & Vibrant Bicycle for Boys & Girls (Ages 7-12)",
    frame: "TIG Welded Durable Frame",
    gears: "Single Speed Safe Drive",
    brakes: "Front & Rear Caliper Brakes",
    wheelSize: "20 Inches HD Rubber",
    image: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-rxmdldocna.jpg",
    badge: "Kids Favorite",
  },
  {
    id: "jetbird-volt-ebike",
    name: "Jetbird Volt Electric E-Bike 26T",
    category: "ebike",
    tagline: "Lithium-Ion Powered Eco-Friendly Urban Electric Bike",
    frame: "Alloy Steel Integrated Battery Frame",
    gears: "7 Speed + 5-Level Pedal Assist",
    brakes: "Dual Cut-off Disc Brakes",
    wheelSize: "26 Inches All-Weather",
    image: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-jw1tpvnsiy.jpg",
    badge: "New E-Bike",
    popular: true,
  },
  {
    id: "jetbird-accessories",
    name: "Jetbird Original Spare Parts & Accessories",
    category: "parts",
    tagline: "Alloy Rims, Saddles, Pedals, Gears & Helmets",
    frame: "OEM Spec Tested",
    gears: "Shimano Compatible Components",
    brakes: "Disc Rotors & Calipers",
    wheelSize: "Universal Sizes",
    image: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-5037x1uybf.jpg",
    badge: "Wholesale Parts",
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === "all"
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Bike className="w-4 h-4 text-blue-600" />
            Product Catalog &amp; Wholesale Models
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Jetbird Bicycles &amp; <span className="text-blue-600">Factory Collection</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our wide range of bicycles manufactured in Ludhiana. Custom colors, frame sizes, and bulk OEM branding available for dealers nationwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: "all", label: "All Bicycles" },
            { id: "mtb", label: "Mountain Bikes (MTB)" },
            { id: "road", label: "Hybrid & City Cycles" },
            { id: "kids", label: "Kids & Junior Cycles" },
            { id: "ebike", label: "Electric E-Bikes" },
            { id: "parts", label: "Parts & Accessories" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-slate-50 border-b border-slate-100 p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {item.badge && (
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Specs List */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Frame:</span>
                    {item.frame}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Gears:</span>
                    {item.gears}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Brakes:</span>
                    {item.brakes}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Wheel Size:</span>
                    {item.wheelSize}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-4 h-4" />
                    Specs &amp; Details
                  </button>
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20Bhagwant%20Cycle%20Industries,%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}.%20Please%20send%20wholesale%20price.`}
                    target="_blank"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative animate-fadeIn">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs uppercase font-bold text-orange-600 tracking-wider">Product Specs</span>
                <h3 className="text-xl font-black text-slate-900">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-700 p-1 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-500">Category</span>
                <span className="font-bold uppercase text-blue-600">{selectedProduct.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-500">Frame Specification</span>
                <span className="font-bold text-slate-900">{selectedProduct.frame}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-500">Gearing System</span>
                <span className="font-bold text-slate-900">{selectedProduct.gears}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-500">Braking System</span>
                <span className="font-bold text-slate-900">{selectedProduct.brakes}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-500">Wheel &amp; Rim</span>
                <span className="font-bold text-slate-900">{selectedProduct.wheelSize}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-500">Manufacturing Unit</span>
                <span className="font-bold text-slate-900">Ludhiana Factory, Punjab</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={`https://wa.me/919876543210?text=Hi,%20I%20want%20wholesale%20quote%20for%20${encodeURIComponent(selectedProduct.name)}`}
                target="_blank"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-center block text-sm shadow-md"
              >
                Get Best Wholesale Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
