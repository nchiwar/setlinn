import React from "react";
import campusPromo from "@/assets/images/campus_tour.png";

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">⭐</span>
      ))}
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="w-full">
      {/* From Challenges to Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">From Challenges to Solutions</h2>
          <p className="text-gray-600 mt-1">We understand the hurdles of moving abroad. That’s why we’re here to help.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-50 grid place-items-center" aria-hidden="true">🛂</div>
              <div>
                <h3 className="font-semibold text-gray-900">Complete Residence Permits</h3>
                <ul className="mt-1 text-sm text-gray-600 list-disc pl-5">
                  <li>Step-by-step guide and appointment tips</li>
                  <li>Community insights from successful applicants</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-50 grid place-items-center" aria-hidden="true">🏠</div>
              <div>
                <h3 className="font-semibold text-gray-900">Finding Safe Housing</h3>
                <ul className="mt-1 text-sm text-gray-600 list-disc pl-5">
                  <li>Verified housing listing and neighborhood guides</li>
                  <li>Scam prevention checklist from our community</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Success Stories from Our Community</h2>
            <p className="text-gray-600 mt-1">Real experiences from people who made their journey abroad successful with Setlinn.</p>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Mário Santos", "Anik Hussain", "Yuki Tanaka"].map((name, idx) => (
              <li key={idx} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <blockquote>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" aria-hidden="true">“</span>
                    <StarRating />
                  </div>
                  <p className="mt-2 text-gray-700 text-sm">
                    Navigating paperwork and housing felt overwhelming until I found Setlinn. The guides were accurate and the community advice was spot‑on.
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">{name}</footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Campus Tour Promo Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="relative h-56 sm:h-72 w-full">
            <img src={campusPromo} alt="Historic university building" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-gradient-to-br from-white to-slate-100 p-5 sm:p-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full px-2 py-1" aria-hidden="true">New Feature</div>
            <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-gray-900">Explore Universities Before You Arrive</h3>
            <p className="mt-1 text-gray-600">Take immersive 3D campus tours with live Q&A. Get insider tips from current students to help you pick the right fit.</p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>3D virtual tours available</li>
              <li>Live sessions with students</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/campus-tour" className="inline-flex h-10 items-center rounded-lg bg-[#207681] px-4 text-white font-semibold">Start a Tour</a>
              <a href="/campus-tour" className="inline-flex h-10 items-center rounded-lg border border-slate-300 px-4 text-slate-700 font-semibold bg-white">Learn More</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}


