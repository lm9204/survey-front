import React from 'react';
import styles from '../styles/ResultPage.module.css';

const ResultHeader = ({ typeData }) => (
  <>
    <h2 className={styles.title}>나의 유형은?</h2>
    <div className={styles.type}>{typeData?.name}</div>
    <img
      src={`/images/activityi-types/${String(typeData?.type).toLowerCase()}-card.png`}
      alt="유형 캐릭터"
      className={styles.character}
    />
  </>
);

export default ResultHeader;