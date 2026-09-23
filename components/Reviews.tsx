"use client";

import React from "react";
import { Star, Quote, CheckCircle, ShieldCheck, ThumbsUp } from "lucide-react";

const reviewsList = [
  {
    name: "Gurpreet Singh",
    role: "Cycle Dealer, Punjab",
    rating: 5,
    date: "Verified Justdial Buyer",
    comment: "Best wholesale cycle manufacturer in Ludhiana! Bought 50 Jetbird 29T MTBs for my shop. Frames are extremely strong and finishing is top notch.",
  },
  {
    name: "Rajesh Kumar",
    role: "Retail Shop Owner, Delhi",
    rating: 5,
    date: "Verified Wholesale Order",
    comment: "Bhagwant Cycle Industries provides direct factory rate with zero compromise on quality. Dual disc brakes and gear shifters work super smooth.",
  },
  {
    name: "Harmanpreet Kaur",
    role: "Customer",
    rating: 5,
    date: "Verified Purchase",
    comment: "Superb Jetbird kids cycle for my son. Highly durable steel frame, vibrant colors, and very polite customer service by the owners.",
  },
  {
    name: "Vikas Sharma",
    role: "Bicycle Distributor",
    rating: 5,
    date: "Verified Buyer",
    comment: "Timely dispatch, excellent packaging, and 100% genuine products. Jetbird bikes are gaining great popularity in North India.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-slate-900 text-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Summary Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-amber-400" />
              100% Customer Satisfaction
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Rated <span className="text-amber-400">5.0 Out of 5.0</span> Stars
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Read authentic feedback from cycle dealers, wholesale buyers, and retail customers who trust Bhagwant Cycle Industries (Jetbird Bikes).
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700 p-8 rounded-3xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
            <div>
              <div className="text-5xl font-black text-amber-400">5.0★</div>
              <div className="flex text-amber-400 justify-center my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400 font-semibold">Average User Rating</p>
            </div>

            <div className="h-12 w-px bg-slate-700 hidden sm:block"></div>

            <div>
              <div className="text-4xl font-black text-white">7+</div>
              <p className="text-sm font-bold text-slate-300 mt-1">Verified Justdial Reviews</p>
              <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1 justify-center mt-1">
                <CheckCircle className="w-3.5 h-3.5" />
                100% Positive
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl space-y-4 hover:border-slate-500 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <h4 className="text-base font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-orange-400 font-semibold">{rev.role}</p>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic">
                "{rev.comment}"
              </p>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-700/60">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {rev.date}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ThumbsUp className="w-3 h-3" /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
