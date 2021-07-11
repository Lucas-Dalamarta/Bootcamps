import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengeContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Lucas-Dalamarta.png" alt="Profile picture" />
      <div>
        <strong>Lucas Dalamarta</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
