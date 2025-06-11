import React, { useState, useEffect } from 'react';
import QuestionPage from '../components/QuestionPage';
import SurveyNavigation from '../components/SurveyNavigation';
import ProgressBar from '../components/ProgressBar';
import { getQuestions } from '../services/questionsService';
import styles from '../styles/SurveyPage.module.css';

function SurveyPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResult();
  }, [])

  const handleNext = () => {
    if (pageIndex < 2) setPageIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(prev => prev - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ProgressBar pageIndex={pageIndex} />
        <QuestionPage pageIndex={pageIndex} questionList = {questions} />
        <SurveyNavigation
          pageIndex={pageIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}

export default SurveyPage;