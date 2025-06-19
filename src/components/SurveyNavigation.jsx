import React from 'react';
import styles from '../styles/SurveyNavigation.module.css';
import { Icon } from './Icon';

function SurveyNavigation({ pageIndex, maxPage, handleNext, handlePrev, handleSubmit }) {

  return (
    <div className={styles.navigation}>
      {pageIndex > 0 && (
        <button className={styles.backBtn} onClick={handlePrev}>
          <Icon name="arrow_back" size={15} weight={800} />
        </button>
      )}
      {pageIndex < maxPage - 1 ? (
        <button onClick={handleNext}>NEXT</button>
      ) : (
        <button onClick={handleSubmit}>DONE</button>
      )}
    </div>
  );
}

export default SurveyNavigation;