import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnboardingStep.module.css";

const ROLES = [
  { key: "student", label: "Student", emoji: "🎓" },
  { key: "worker", label: "Worker", emoji: "💼" },
  { key: "family", label: "Family reunification", emoji: "👨‍👩‍👧" },
  { key: "retired", label: "Retired", emoji: "🧓" },
];

export default function OnboardingStep2() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("onboarding.role");
    if (saved) setRole(saved);
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem("onboarding.role", role);
    navigate("/onboarding/step-3");
  };

  return (
    <main className={styles.wrapper} aria-labelledby="ob2-title">
      <section className={styles.card}>
        <header className={styles.header}>
          <p className={styles.progress} aria-label="Step 2 of 5">2 / 5</p>
          <h1 id="ob2-title" className={styles.title}>Tell us about yourself</h1>
          <p className={styles.subtitle}>Confirm your selection to tailor your experience.</p>
        </header>

        <div className={styles.optionsGrid} role="group" aria-label="Confirm profile type">
          {ROLES.map((r) => (
            <button
              key={r.key}
              type="button"
              className={role === r.key ? styles.optionActive : styles.option}
              onClick={() => setRole(r.key)}
              aria-pressed={role === r.key}
            >
              <span className={styles.optionIcon} aria-hidden="true">{r.emoji}</span>
              <span className={styles.optionLabel}>{r.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.footerRow}>
          <button className={styles.secondaryBtn} onClick={() => navigate("/onboarding/step-1")}>Back</button>
          <button className={styles.primaryBtn} onClick={handleContinue}>Continue</button>
        </div>
      </section>
    </main>
  );
}


