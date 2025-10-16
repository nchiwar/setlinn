import React, { useMemo, useState } from "react";
import styles from "./CityHub.module.css";
import berlin from "../assets/images/welcome.png";
import resourcesImg from "../assets/images/resources2.png";

const cities = [
  { id: "berlin", name: "Berlin", img: berlin, badge: "Popular", members: 12450, posts: 347, desc: "International hub with vibrant tech and culture." },
  { id: "munich", name: "Munich", img: resourcesImg, badge: "", members: 8250, posts: 212, desc: "Top universities and strong job market." },
  { id: "hamburg", name: "Hamburg", img: resourcesImg, badge: "", members: 5100, posts: 133, desc: "Harbor city with great quality of life." },
  { id: "cologne", name: "Cologne", img: resourcesImg, badge: "", members: 4700, posts: 118, desc: "Friendly community and affordable living." },
  { id: "frankfurt", name: "Frankfurt", img: resourcesImg, badge: "", members: 6900, posts: 176, desc: "Finance capital with international crowd." },
  { id: "heidelberg", name: "Heidelberg", img: resourcesImg, badge: "", members: 2100, posts: 64, desc: "Picturesque student town, historic university." },
];

function CityCard({ city }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMedia}>
        <img src={city.img} alt="" />
        {city.badge ? <span className={styles.badge}>{city.badge}</span> : null}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{city.name}</h3>
        <p className={styles.cardDesc}>{city.desc}</p>
        <div className={styles.metaRow}>
          <span>{city.members.toLocaleString()} members</span>
          <span>{city.posts} posts</span>
        </div>
        <div className={styles.cardCtas}>
          <a href={`/community/category/${city.id}`} className={styles.primaryCta}>Open Community</a>
          <a href={`/events?city=${encodeURIComponent(city.id)}`} className={styles.secondaryCta}>Events</a>
        </div>
      </div>
    </article>
  );
}

export default function CityHub() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query) return cities;
    const q = query.toLowerCase();
    return cities.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className={styles.wrapper} aria-labelledby="cityhub-title">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 id="cityhub-title" className={styles.title}>Find Your City Community</h1>
          <p className={styles.subtitle}>Discover local communities, resources and events. Join conversations and get support from people living in your next city.</p>
          <div className={styles.searchRow}>
            <label htmlFor="city-search" className="sr-only">Search for your city</label>
            <input id="city-search" type="search" className={styles.searchInput} placeholder="Search for your city..." value={query} onChange={(e)=>setQuery(e.target.value)} />
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="all-cities-heading">
        <h2 id="all-cities-heading" className={styles.sectionTitle}>All Cities</h2>
        <div className={styles.grid}>
          {filtered.map((c) => (
            <CityCard key={c.id} city={c} />
          ))}
        </div>

        <div className={styles.footerCta}>
          <p>Don’t see your city?</p>
          <a className={styles.secondaryCta} href="/support">Request a City</a>
        </div>
      </section>
    </main>
  );
}


