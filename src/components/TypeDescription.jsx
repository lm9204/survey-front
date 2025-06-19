import React from 'react';
import styles from '../styles/ResultPage.module.css';

const TypeDescription = ({ typeData }) => (
  <>
    <h3 className={styles.descriptionTitle}>{typeData?.type} 유형은</h3>
    <div className={styles.description}>{typeData?.description}</div>

    <h3 className={styles.descriptionTitle}>{typeData?.type}에게 맞는 여가 활동이란?</h3>
    <div className={styles.description}>{typeData?.suitable_activities}</div>

    <h3 className={styles.descriptionTitle}>{typeData?.type}의 긍정적 영향</h3>
    <div className={styles.description}>{typeData?.positive_effect}</div>

    <h3 className={styles.descriptionTitle}>특이한 점은</h3>
    <div className={styles.description}>{typeData?.special_notes}</div>

    <h3 className={styles.descriptionTitle}>잘 어울리는 유형</h3>
    <div className={styles.description}>{typeData?.partner_types}</div>
  </>
);

export default TypeDescription;