import React from "react";
import Products from "@/components/Products";

export default function ProductsPage() {
  return (
    <div className="py-10">
      <div className="bg-slate-900 text-white py-12 px-4 mb-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-black">Jetbird Bicycle Catalog</h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Explore Mountain Bikes, Hybrid Cycles, Kids Cycles, E-Bikes &amp; Accessories Direct From Factory
        </p>
      </div>
      <Products />
    </div>
  );
}
