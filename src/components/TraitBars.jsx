import React from 'react';
import styles from '../styles/ResultPage.module.css';

const TraitBars = ({ traits }) => (
  <div className={styles.traitBars}>
    <div className={styles.traitRow}>
      <span className={styles.traitLeft}>내향적</span>
      <div className={styles.traitBar}>
        <div style={{ width: `${traits.IE}%` }} />
      </div>
      <span className={styles.traitRight}>외향적</span>
    </div>
    <div className={styles.traitRow}>
      <span className={styles.traitLeft}>창의적</span>
      <div className={styles.traitBar}>
        <div style={{ width: `${traits.CR}%` }} />
      </div>
      <span className={styles.traitRight}>논리적</span>
    </div>
    <div className={styles.traitRow}>
      <span className={styles.traitLeft}>동적</span>
      <div className={styles.traitBar}>
        <div style={{ width: `${traits.DS}%` }} />
      </div>
      <span className={styles.traitRight}>안정적</span>
    </div>
  </div>
);

export default TraitBars;