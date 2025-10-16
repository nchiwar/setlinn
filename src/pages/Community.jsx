import BenefitCard from "@components/community/BenefitCard";

const communityBenefits = [
  {
    title: "Peer to Peer Q&A",
    description:
      "Get answers to your questions from fellow students and professionals.",
  },
  {
    title: "Mentor Access",
    description: "Connect with experienced mentors",
  },
  {
    title: "Job Access",
    description: "Discover and share Job opportunities",
  },
];

function Community() {
  return (
    // Max width container and generous padding
    <div className="container mx-auto px-4 py-2 md:px-8 max-w-6xl">
      {/* Community Feed + Sidebar */}
      <section className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Feed */}
          <div className="lg:col-span-2">
            {/* Composer */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm mb-6">
              <label htmlFor="composer" className="sr-only">Share your experience or ask a question</label>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 grid place-items-center font-semibold" aria-hidden="true">DM</div>
                <div className="flex-1">
                  <input id="composer" type="text" placeholder="Share your experience or ask a question..." className="w-full h-11 rounded-lg border border-gray-300 px-3" />
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
                    <button className="inline-flex items-center gap-1 rounded-lg border px-3 py-1">📷 Photo</button>
                    <button className="inline-flex items-center gap-1 rounded-lg border px-3 py-1">🎥 Video</button>
                    <button className="inline-flex items-center gap-1 rounded-lg border px-3 py-1">📄 Document</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">Filter by Category</span>
                <div className="hidden sm:flex items-center gap-2">
                  {[
                    ["All", 247, "all"],
                    ["Jobs", 45, "jobs"],
                    ["Housing", 78, "housing"],
                    ["Finance", 62, "finance"],
                  ].map(([label, count, slug]) => (
                    <a key={label} href={`/community/category/${slug}`} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1">{label}<span className="text-gray-500">{count}</span></a>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="sort" className="sr-only">Sort</label>
                <select id="sort" className="h-9 rounded-lg border border-gray-300 px-2 text-sm">
                  <option>Recent</option>
                  <option>Top</option>
                </select>
              </div>
            </div>

            {/* Posts */}
            {[1,2].map((i) => (
              <article key={i} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm mb-6">
                <header className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center font-semibold" aria-hidden="true">AM</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-900">Emma L.</span>
                      <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs">Student</span>
                      <span className="text-gray-500">Munich, Germany</span>
                    </div>
                    <p className="mt-3 text-gray-800 text-sm">FINANCE TIP: Opening a bank account in Germany as a newcomer</p>
                    <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                      <li>N26 (fully digital, English app)</li>
                      <li>Deutsche Bank (educational account)</li>
                      <li>Sparkasse (local, everywhere)</li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {["Banking","Finance","Germany"].map((t)=> (
                        <a key={t} href={`/community/category/${t.toLowerCase()}`} className="rounded-full bg-gray-100 px-2 py-1">#{t}</a>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <span>95 reactions · 28 comments</span>
                      <span>1.2 shares</span>
                    </div>
                    <div className="mt-3 flex items-center gap-6 text-gray-600">
                      <button className="inline-flex items-center gap-2"><span aria-hidden>👍</span> Like</button>
                      <button className="inline-flex items-center gap-2">💬 Comment</button>
                      <button className="inline-flex items-center gap-2">🔗 Share</button>
                    </div>
                  </div>
                </header>
              </article>
            ))}
          </div>

          {/* Right: Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Onboarding */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">New to Setlinn?</h3>
              <p className="text-sm text-gray-600 mt-1">Complete your profile to get personalized recommendations and start engaging.</p>
              <a href="/profile" className="mt-3 inline-flex h-9 items-center rounded-lg bg-[#207681] px-3 text-white font-semibold">Complete Profile</a>
            </div>

            {/* Journey */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Your Journey</h3>
              <div className="h-2 rounded-full bg-gray-100"><div className="h-2 w-2/5 rounded-full bg-[#207681]" aria-label="40% complete"></div></div>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                {[
                  "Visa Application",
                  "Find Housing",
                  "City Registration",
                  "Health Insurance",
                  "Bank Account",
                ].map((step, idx) => (
                  <li key={step} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-300" aria-hidden="true" />{idx===2 ? <strong>{step}</strong> : step}</li>
                ))}
              </ul>
            </div>

            {/* Trending Topics */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Trending Topics</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {["#BerlinLife", "#PartTimeJobs", "#ResidencePermit", "#LearnGermanLanguage"].map((t) => (
                  <a key={t} href="/topics" className="rounded-full bg-gray-100 px-2 py-1">{t}</a>
                ))}
              </div>
            </div>

            {/* Groups */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">My Groups</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Berlin Students 2025</li>
                <li>German Language Exchange</li>
              </ul>
              <a href="/groups" className="mt-2 inline-block text-sm text-[#207681] font-semibold">See All</a>
            </div>

            {/* Events */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Upcoming Events</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>City Registration Workshop — Oct 15, 2025 · 6:00 PM</li>
                <li>Campus Welcome Meetup — Oct 18, 2025 · 5:00 PM</li>
              </ul>
              <a href="/events" className="mt-2 inline-block text-sm text-[#207681] font-semibold">View All Events</a>
            </div>

            {/* Quick Access */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Access Resources</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><a href="/resources/2" className="text-[#207681]">Visa Handbook</a></li>
                <li><a href="/resources/6" className="text-[#207681]">Housing Guide</a></li>
                <li><a href="/resources/4" className="text-[#207681]">Health Insurance</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Community Benefits Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Community Benefits
        </h2>
        <p className="text-md text-gray-600 mb-12">
          Join a network of support to make your journey in Germany smoother.
        </p>

        {/* Benefits Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {communityBenefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Community;
