import React from "react";
import { useParams } from "react-router-dom";

const humanize = (slug) => slug.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

export default function Category() {
  const { slug } = useParams();
  const title = slug ? humanize(slug) : "All";

  return (
    <main className="container mx-auto px-4 py-12 md:px-8 max-w-6xl">
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">#{title}</h1>
        <p className="text-gray-600">Showing community posts filtered by category.</p>
      </header>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <p>Placeholder feed for the “{title}” category. Connect this to your backend filters later.</p>
      </div>
    </main>
  );
}


