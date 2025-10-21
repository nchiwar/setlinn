import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnboardingStep.module.css";

const ROLES = [
  { key: "student", label: "Student", emoji: "🎓" },
  { key: "worker", label: "Worker", emoji: "💼" },
  { key: "family", label: "Family reunification", emoji: "👨‍👩‍👧" },
  { key: "retired", label: "Retired", emoji: "🧓" },
];

export default function OnboardingStep1() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("onboarding.role");
    if (saved) setRole(saved);
  }, []);

  const handleContinue = () => {
    if (!role) return;
    sessionStorage.setItem("onboarding.role", role);
    navigate("/onboarding/step-2");
  };

  return (
    <main className={styles.wrapper} aria-labelledby="ob-title">
      <section className={styles.card}>
        <header className={styles.header}>
          <p className={styles.progress} aria-label="Step 1 of 5">1 / 5</p>
          <h1 id="ob-title" className={styles.title}>Tell us about yourself</h1>
          <p className={styles.subtitle}>Choose the option that best describes you.</p>
        </header>

        <div className={styles.optionsGrid} role="group" aria-label="Profile type">
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
          <button className={styles.secondaryBtn} onClick={() => navigate(-1)}>Back</button>
          <button className={styles.primaryBtn} onClick={handleContinue} aria-disabled={!role}>Continue</button>
        </div>
      </section>
    </main>
  );
}


