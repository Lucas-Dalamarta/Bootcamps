import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const percentageToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: `${percentageToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentageToNextLevel}%` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel}xp</span>
    </header>
  );
}
