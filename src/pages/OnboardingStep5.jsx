import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnboardingStep.module.css";

export default function OnboardingStep5() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("Friend");

  useEffect(() => {
    const name = sessionStorage.getItem("onboarding.firstName");
    if (name) setFirstName(name);
  }, []);

  const finish = () => {
    // TODO: integrate with real API to finalize onboarding
    navigate("/community");
  };

  return (
    <main className={styles.wrapper} aria-labelledby="ob5-title">
      <section className={styles.card}>
        <header className={styles.header}>
          <p className={styles.progress} aria-label="Step 5 of 5">5 / 5</p>
          <h1 id="ob5-title" className={styles.title}>Welcome aboard, {firstName}!</h1>
          <p className={styles.subtitle}>Your profile is ready. Here are a few ways to get started.</p>
        </header>

        <ul className={styles.quickGrid}>
          <li className={styles.quickCard}><a href="/community" className={styles.linkCard}>Join Community</a></li>
          <li className={styles.quickCard}><a href="/resource" className={styles.linkCard}>Explore Resources</a></li>
          <li className={styles.quickCard}><a href="/campus-tour" className={styles.linkCard}>Book a Tour</a></li>
        </ul>

        <div className={styles.footerRow}>
          <button className={styles.primaryBtn} onClick={finish}>Go to Community</button>
        </div>
      </section>
    </main>
  );
}


