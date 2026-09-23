"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    requirement: "Wholesale Order",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-blue-600" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact &amp; <span className="text-blue-600">Wholesale Inquiry</span>
          </h2>
          <p className="text-slate-600 text-base">
            Reach out directly to our Ludhiana factory unit for dealer pricing, catalog requests, or custom OEM manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">Factory &amp; Registered Office</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bhagwant Cycle Industries (Jetbird Bikes)<br />
                    Plot No 10, Canal Industrial Estate,<br />
                    Dehlonsahnewal Road, Tibba,<br />
                    Ludhiana, Punjab - 141120, India
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">Business Working Hours</h4>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p className="flex justify-between gap-4">
                      <span>Monday - Saturday:</span>
                      <span className="font-bold text-slate-900">09:30 AM - 06:30 PM</span>
                    </p>
                    <p className="flex justify-between gap-4 text-rose-600">
                      <span>Sunday:</span>
                      <span className="font-bold">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Instant Phone &amp; WhatsApp Support</h4>
                  <p className="text-xs text-slate-500">Available during working hours for dealer inquiries</p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href="tel:+919876543210"
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-orange-400" />
                      Call Sales Team
                    </a>
                    <a
                      href="https://wa.me/919876543210?text=Hi%20Bhagwant%20Cycle%20Industries,%20I%20want%20to%20inquire%20about%20bicycle%20prices."
                      target="_blank"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp Direct
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embed Map Coordinates */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-48 bg-slate-200 relative">
              <iframe
                title="Bhagwant Cycle Location"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://maps.google.com/maps?q=30.815098,75.947063&hl=en&z=14&output=embed"
              ></iframe>
            </div>

          </div>

          {/* Right Column Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">Fast Response</span>
              <h3 className="text-2xl font-black text-slate-900">Send Wholesale Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">Fill in your details below and our Ludhiana factory team will send you the price list.</p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                <p className="text-sm text-slate-600">
                  Thank you for reaching out to Bhagwant Cycle Industries (Jetbird Bikes). Our representative will contact you shortly with catalog &amp; pricing.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs hover:bg-emerald-700"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Ludhiana, Delhi, Jaipur"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Type</label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                    >
                      <option value="Wholesale Order">Wholesale / Dealership Order</option>
                      <option value="OEM Manufacturing">OEM Custom Brand Cycle Manufacturing</option>
                      <option value="Retail Purchase">Single Bicycle Purchase</option>
                      <option value="Spare Parts">Cycle Spare Parts Bulk Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Cycle Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Mention models (MTB, Road, Kids), quantity required, or custom requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Wholesale Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
