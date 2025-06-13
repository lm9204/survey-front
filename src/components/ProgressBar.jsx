import React from 'react';
import styles from '../styles/ProgressBar.module.css';

function ProgressBar({ pageIndex, maxPage }) {
  return (
    <div className={styles.progressBar}>
      { Array.from({ length: maxPage}, (e, i) => i).map(idx => (
        <div
          key={idx}
          className={`${styles.step} ${idx <= pageIndex ? styles.active : ''}`}
        />
      ))}
    </div>
  );
}

export default ProgressBar;