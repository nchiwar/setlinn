import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnboardingStep.module.css";

export default function OnboardingStep3() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setFirstName(sessionStorage.getItem("onboarding.firstName") || "");
    setLastName(sessionStorage.getItem("onboarding.lastName") || "");
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem("onboarding.firstName", firstName);
    sessionStorage.setItem("onboarding.lastName", lastName);
    navigate("/onboarding/step-4");
  };

  return (
    <main className={styles.wrapper} aria-labelledby="ob3-title">
      <section className={styles.card}>
        <header className={styles.header}>
          <p className={styles.progress} aria-label="Step 3 of 5">3 / 5</p>
          <h1 id="ob3-title" className={styles.title}>Just to set up your profile</h1>
          <p className={styles.subtitle}>We’ll use this to personalize your experience.</p>
        </header>

        <form className={styles.form} onSubmit={(e)=>{e.preventDefault(); handleContinue();}}>
          <label className={styles.label} htmlFor="firstName">First Name</label>
          <input id="firstName" className={styles.input} value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />

          <label className={styles.label} htmlFor="lastName">Last Name</label>
          <input id="lastName" className={styles.input} value={lastName} onChange={(e)=>setLastName(e.target.value)} required />

          <div className={styles.footerRow}>
            <button type="button" className={styles.secondaryBtn} onClick={() => navigate("/onboarding/step-2")}>Back</button>
            <button type="submit" className={styles.primaryBtn}>Continue</button>
          </div>
        </form>
      </section>
    </main>
  );
}


