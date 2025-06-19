import React from 'react';
import styles from '../styles/ResultPage.module.css';

const SimilaritySection = ({ similarity, setSimilarity }) => (
  <div className={styles.similarityWrapper}>
    <svg viewBox="0 0 300 160" className={styles.similarityBackground}>
      <path
        d="
          M 150 6.4 L 281 30.4 Q 299 33.6 300 46.4 V 100 Q 300 124 270 124 H 30 Q 0 124 0 100 V 46.4 Q 3 33.6 18 30.4 Z
        "
        fill="#ffffff"
        stroke="#DADADA"
        strokeWidth="0"
      />
    </svg>
    <div className={styles.similaritySection}>
      <p className={styles.similarityTitle}>이 유형이 내 성향과 비슷한가요?</p>
      <input
        className={styles.similarityBar}
        type="range"
        min="0"
        max="10"
        value={similarity}
        onChange={e => setSimilarity(e.target.value)}
      />
    </div>
  </div>
);

export default SimilaritySection;