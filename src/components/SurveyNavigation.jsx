import React from 'react';
import styles from '../styles/SurveyNavigation.module.css';

function SurveyNavigation({ pageIndex, maxPage, handleNext, handlePrev, handleSubmit }) {

  return (
    <div className={styles.navigation}>
      {pageIndex > 0 && <button onClick={handlePrev}>이전</button>}
      {pageIndex < maxPage - 1 ? (
        <button onClick={handleNext}>다음</button>
      ) : (
        <button onClick={handleSubmit}>결과보기</button>
      )}
    </div>
  );
}

export default SurveyNavigation;