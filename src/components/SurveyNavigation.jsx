import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SurveyNavigation.module.css';

function SurveyNavigation({ pageIndex, handleNext, handlePrev }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/result');
  };

  return (
    <div className={styles.navigation}>
      {pageIndex > 0 && <button onClick={handlePrev}>이전</button>}
      {pageIndex < 2 ? (
        <button onClick={handleNext}>다음</button>
      ) : (
        <button onClick={handleSubmit}>결과보기</button>
      )}
    </div>
  );
}

export default SurveyNavigation;