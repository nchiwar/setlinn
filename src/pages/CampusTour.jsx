import React, { useMemo, useState } from "react";
import styles from "./CampusTour.module.css";
import heroImg from "../assets/images/campus_tour.png";
import resourcesImg from "../assets/images/resources2.png";
import communityImg from "../assets/images/community-support.png";

function CampusTour() {
  const todayIso = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [selectedDate, setSelectedDate] = useState(todayIso);
  const [selectedSlot, setSelectedSlot] = useState("");

  const benefitItems = [
    { title: "Explore Campus", desc: "Tour facilities, libraries and dorms in HD.", icon: "🏫" },
    { title: "Virtual Reality", desc: "Immersive 3D walkthrough of key spots.", icon: "🕶️" },
    { title: "Live Q&A", desc: "Chat with students and admissions reps.", icon: "💬" },
    { title: "City Insights", desc: "Neighborhood tips, transit, and costs.", icon: "🗺️" },
  ];

  const resources = [
    { id: 1, title: "Campus Life Guide", desc: "Daily life, clubs and housing.", img: resourcesImg },
    { id: 2, title: "Visa & Docs", desc: "Checklist for international students.", img: communityImg },
    { id: 3, title: "Budgeting 101", desc: "Costs and scholarships overview.", img: resourcesImg },
  ];

  const timeSlots = ["09:00", "10:30", "12:00", "14:00", "16:00"];

  const testimonials = [
    { name: "Amina S.", quote: "The 3D tour helped me choose my university with confidence." },
    { name: "Jonas K.", quote: "Loved the live Q&A—got answers I couldn't find online." },
    { name: "Priya R.", quote: "Booking was easy and the tour felt like I was on campus." },
  ];

  const faqs = [
    { q: "How long is a tour?", a: "Tours last 45–60 minutes including Q&A." },
    { q: "Is it free?", a: "Yes, virtual tours are free. Physical tours may have a small fee." },
    { q: "Do I need VR gear?", a: "No—VR is optional; the tour works on any device." },
  ];

  return (
    <main className={styles.wrapper} aria-labelledby="campus-tour-title">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 id="campus-tour-title" className={styles.title}>
            Experience Campus Life — Virtually in 3D
        </h1>
          <p className={styles.subtitle}>
            Join guided tours of top German universities, meet students, and explore
            facilities—without leaving home.
          </p>
          <a className={styles.primaryCta} href="/bookings/new" aria-label="Book a campus tour">
            Book a Tour
          </a>
        </div>
        <div className={styles.heroMedia}>
          <img src={heroImg} alt="Students touring a university campus" />
      </div>
      </section>

      {/* Why Join */}
      <section className={styles.section} aria-labelledby="why-join-heading">
        <h2 id="why-join-heading" className={styles.sectionTitle}>Why Join a Campus Tour</h2>
        <ul className={styles.benefits}>
          {benefitItems.map((b) => (
            <li key={b.title} className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Resources */}
      <section className={styles.section} aria-labelledby="resources-heading">
        <div className={styles.sectionHeaderRow}>
          <h2 id="resources-heading" className={styles.sectionTitle}>Your Resources</h2>
          <a href="/resources" className={styles.linkButton}>See all</a>
        </div>
        <div className={styles.resourceGrid}>
          {resources.map((r) => (
            <article key={r.id} className={styles.resourceCard}>
              <img className={styles.resourceImg} src={r.img} alt="" aria-hidden="true" />
              <div className={styles.resourceBody}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
                <a className={styles.linkButton} href="/resources">Read</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section className={styles.section} aria-labelledby="booking-heading">
        <h2 id="booking-heading" className={styles.sectionTitle}>Book Your Campus Tour</h2>
        <div className={styles.bookingGrid}>
          <div className={styles.calendarCol}>
            <label htmlFor="tour-date" className={styles.label}>Select a date</label>
            <input
              id="tour-date"
              type="date"
              className={styles.dateInput}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={todayIso}
            />
            <p className={styles.hint}>All times are shown in your local timezone.</p>
          </div>
          <div className={styles.slotsCol}>
            <fieldset className={styles.slotsFieldset}>
              <legend className={styles.label}>Available time slots</legend>
              <div className={styles.slotsGrid}>
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={t === selectedSlot ? styles.slotBtnActive : styles.slotBtn}
                    onClick={() => setSelectedSlot(t)}
                    aria-pressed={t === selectedSlot}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <a
              href={`/bookings/new?date=${encodeURIComponent(selectedDate)}&time=${encodeURIComponent(selectedSlot)}`}
              className={styles.primaryCta}
              aria-disabled={!selectedSlot}
              onClick={(e) => { if (!selectedSlot) e.preventDefault(); }}
            >
              Continue to Booking
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section} aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className={styles.sectionTitle}>What Students Say</h2>
        <ul className={styles.testimonials}>
          {testimonials.map((t) => (
            <li key={t.name} className={styles.testimonialCard}>
              <p className={styles.quote}>“{t.quote}”</p>
              <p className={styles.author}>— {t.name}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className={styles.section} aria-labelledby="faq-heading">
        <h2 id="faq-heading" className={styles.sectionTitle}>Frequently Asked</h2>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.faqItem}>
              <summary className={styles.faqSummary}>{f.q}</summary>
              <p className={styles.faqAnswer}>{f.a}</p>
            </details>
          ))}
    </div>
      </section>
    </main>
  );
}

export default CampusTour;
