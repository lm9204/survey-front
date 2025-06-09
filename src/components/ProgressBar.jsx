import React from 'react';
import styles from '../styles/ProgressBar.module.css';

function ProgressBar({ pageIndex }) {
  return (
    <div className={styles.progressBar}>
      {[0, 1, 2].map(idx => (
        <div
          key={idx}
          className={`${styles.step} ${idx <= pageIndex ? styles.active : ''}`}
        />
      ))}
    </div>
  );
}

export default ProgressBar;