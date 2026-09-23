"use client";

import React, { useState } from "react";
import { Camera, Image as ImageIcon, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    url: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-bc70rtmnj3.jpg",
    title: "Main Store Front & Jetbird Showroom",
    caption: "Factory Outlet & Display Unit in Tibba, Ludhiana",
  },
  {
    url: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-rxmdldocna.jpg",
    title: "Jetbird Bicycle Stock & Inventory",
    caption: "Bulk Assembly & Finished Bicycle Inventory",
  },
  {
    url: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-jw1tpvnsiy.jpg",
    title: "Manufacturing Unit & Frame Testing",
    caption: "Precision Welding & Paint Shop in Canal Industrial Estate",
  },
  {
    url: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-mq7qfklcki.jpg",
    title: "Mountain Bikes & All-Terrain Models",
    caption: "Featured 21-Speed Gear Bicycles & MTB Range",
  },
  {
    url: "https://content3.jdmagicbox.com/v2/comp/ludhiana/b2/0161px161.x161.241205215425.w1b2/catalogue/bhagwant-cycle-industries-jetbird-bikes-tibba-ludhiana-bicycle-dealers-5037x1uybf.jpg",
    title: "Bicycle Rims & Spare Parts Warehouse",
    caption: "Wholesale Components & High Grade Alloy Wheel Production",
  },
  {
    url: "https://content2.jdmagicbox.com/checkin/ludhiana/0161PX161.X161.241205215425.W1B2.jpg",
    title: "Factory Verification & Premises",
    caption: "Plot No 10, Dehlonsahnewal Road, Tibba, Ludhiana",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-orange-600" />
            Verified Factory Photos
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Factory &amp; Showroom <span className="text-orange-600">Gallery</span>
          </h2>
          <p className="text-slate-600 text-base">
            Take a visual tour of Bhagwant Cycle Industries (Jetbird Bikes) located at Plot 10, Canal Industrial Estate, Tibba, Ludhiana.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img.url)}
              className="relative group rounded-2xl overflow-hidden shadow-md border border-slate-200 cursor-pointer bg-slate-900 h-72"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider block">
                  Photo {idx + 1} of 6
                </span>
                <h4 className="text-base font-bold">{img.title}</h4>
                <p className="text-xs text-slate-300 line-clamp-1">{img.caption}</p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={activeImage}
              alt="Enlarged photo"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-700"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
