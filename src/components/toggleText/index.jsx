import styles from "./styles.module.css";
import { useState, useRef } from "react";

function ToggleText() {
  const textRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState("");

  const toggleText = () => {
    setIsVisible((prev) => !prev);
  };

  const handleDurationChange = (e) => {
    setDuration(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2>Hide and Show Text</h2>

      <div className={styles.controls}>
        <button onClick={toggleText}>
          {isVisible ? "Hide text" : "Show text"}
        </button>

        <input
          type="number"
          value={duration}
          onChange={handleDurationChange}
          placeholder="Duration (ms)"
        />
      </div>

      <div
        ref={textRef}
        className={`${styles.textBlock} ${isVisible ? styles.open : ""}`}
        style={{ transitionDuration: `${duration || 500}ms` }}
      >
        <p>This is hidden text. Click the button to hide or show it.</p>
      </div>
    </div>
  );
}
export default ToggleText;
