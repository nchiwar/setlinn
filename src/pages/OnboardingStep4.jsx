import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnboardingStep.module.css";

export default function OnboardingStep4() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setCountry(sessionStorage.getItem("onboarding.country") || "Germany");
    setCity(sessionStorage.getItem("onboarding.city") || "");
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem("onboarding.country", country);
    sessionStorage.setItem("onboarding.city", city);
    navigate("/onboarding/step-5");
  };

  return (
    <main className={styles.wrapper} aria-labelledby="ob4-title">
      <section className={styles.card}>
        <header className={styles.header}>
          <p className={styles.progress} aria-label="Step 4 of 5">4 / 5</p>
          <h1 id="ob4-title" className={styles.title}>Set up your profile</h1>
          <p className={styles.subtitle}>Where are you headed? This helps us show relevant info.</p>
        </header>

        <form className={styles.form} onSubmit={(e)=>{e.preventDefault(); handleContinue();}}>
          <label className={styles.label} htmlFor="country">Destination Country</label>
          <input id="country" className={styles.input} value={country} onChange={(e)=>setCountry(e.target.value)} required />

          <label className={styles.label} htmlFor="city">City</label>
          <input id="city" className={styles.input} value={city} onChange={(e)=>setCity(e.target.value)} required />

          <div className={styles.footerRow}>
            <button type="button" className={styles.secondaryBtn} onClick={() => navigate("/onboarding/step-3")}>Back</button>
            <button type="submit" className={styles.primaryBtn}>Continue</button>
          </div>
        </form>
      </section>
    </main>
  );
}


