import React, { useMemo, useState } from "react";
import styles from "./Resource.module.css";
import heroIllustration from "../assets/images/resources2.png";

const allResources = [
  { id: 1, icon: "🏢", badge: "Popular", title: "City Registration", desc: "Complete Anmeldung quickly with step‑by‑step instructions." },
  { id: 2, icon: "🛂", badge: "Updated", title: "Residence Permit", desc: "Visa types, timelines and appointment tips." },
  { id: 3, icon: "💼", badge: "New", title: "Student Jobs", desc: "Rules, taxes and where to find part‑time roles." },
  { id: 4, icon: "❤️", badge: "", title: "Insurance & Healthcare", desc: "Public vs private, how to register with a GP." },
  { id: 5, icon: "💶", badge: "", title: "Finance & Scholarships", desc: "Opening bank accounts and funding options." },
  { id: 6, icon: "🏠", badge: "Popular", title: "Housing & Accommodation", desc: "How to find rooms and avoid scams." },
  { id: 7, icon: "🗣️", badge: "", title: "Learn German", desc: "Course options and free practice resources." },
];

function Resource() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query) return allResources;
    const q = query.toLowerCase();
    return allResources.filter((r) =>
      [r.title, r.desc].some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <main className={styles.wrapper} aria-labelledby="resources-title">
      {/* Header */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroInner}>
          <h1 id="resources-title" className={styles.title}>Explore Essential Resources</h1>
          <p className={styles.subtitle}>
            Curated guides and tools to help you navigate every step of your journey. Verified by experts.
          </p>

          <div className={styles.searchRow}>
            <label htmlFor="resource-search" className="sr-only">Search resources</label>
            <input
              id="resource-search"
              type="search"
              className={styles.searchInput}
              placeholder="Search for guides, terms or topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <dl className={styles.stats} aria-label="Resource statistics">
            <div className={styles.stat}><dd className={styles.statValue}>150+</dd><dt className={styles.statLabel}>Verified resources</dt></div>
            <div className={styles.stat}><dd className={styles.statValue}>25k+</dd><dt className={styles.statLabel}>Downloads</dt></div>
            <div className={styles.stat}><dd className={styles.statValue}>94%</dd><dt className={styles.statLabel}>Success rate</dt></div>
          </dl>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          {/* Replace with a real illustration or SVG under src/assets/images */}
          <img className={styles.heroImg} src={heroIllustration} alt="" />
          <div className={styles.iconCluster}>
            <span className={styles.iconBubble} title="Docs">📄</span>
            <span className={styles.iconBubble} title="Visa">🛂</span>
            <span className={styles.iconBubble} title="Housing">🏠</span>
            <span className={styles.iconBubble} title="Health">❤️</span>
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className={styles.section} aria-labelledby="all-resources-heading">
        <h2 id="all-resources-heading" className={`${styles.sectionTitle} ${styles.sectionTitleWhite}`}>All Resources</h2>
        <p className={styles.sectionHint}>Click any card to access concise guides, forms, and step‑by‑step instructions.</p>
        <div className={styles.cardGrid}>
          {filtered.map((r) => (
            <article key={r.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <div className={styles.cardIcon} aria-hidden="true">{r.icon}</div>
                {r.badge ? <span className={styles.badge}>{r.badge}</span> : null}
              </header>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <a className={styles.linkButton} href={`/resources/${r.id}`}>Learn more</a>
            </article>
          ))}
        </div>
      </section>

      {/* Verified Banner */}
      <section className={styles.section} aria-labelledby="verified-heading">
        <div className={styles.banner} role="note" aria-labelledby="verified-heading">
          <div className={styles.bannerIcon} aria-hidden="true">✅</div>
          <div className={styles.bannerBody}>
            <h3 id="verified-heading" className={styles.bannerTitle}>Verified & Trusted Information</h3>
            <p className={styles.bannerDesc}>
              Every guide on Setlinn is reviewed by community experts and verified by our editorial team. We update content when regulations change and cite official sources.
            </p>
            <div className={styles.bannerCtas}>
              <a className={styles.primaryCta} href="/resources/request">Request a Resource</a>
              <a className={styles.secondaryCta} href="/support">Contact Support</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resource;
