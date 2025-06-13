import React, { useState, useEffect } from 'react';
import QuestionPage from '../components/QuestionPage';
import SurveyNavigation from '../components/SurveyNavigation';
import ProgressBar from '../components/ProgressBar';
import { getSurveyData, submitSurvey } from '../services/surveyService';
import styles from '../styles/SurveyPage.module.css';

function SurveyPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const {questions: flatQuestions} = await getSurveyData();
        setQuestions(flatQuestions);
        setMaxPage(Math.ceil(flatQuestions.length / 4));
        setAnswers(Array.from({length: flatQuestions.length}));
      } catch (err) {
        console.error(err);
      }
    };

    fetchResult();
  }, [])

  const handleNext = () => {
    const startIdx = pageIndex * 4;
    const endIdx = Math.min(startIdx + 4, questions.length);
    const isPageComplete = answers.slice(startIdx, endIdx).every(ans => ans !== undefined);

    if (!isPageComplete) {
      alert('현재 페이지의 모든 문항에 답변해 주세요.');
      return;
    }

    if (pageIndex < maxPage - 1) setPageIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(prev => prev - 1);
  };

  const handleSubmit = async () => {
    const isAllAnswered =
      questions.length > 0 &&
      answers.length === questions.length &&
      answers.every(ans => ans !== undefined);

    if (!isAllAnswered) {
      alert('모든 문항에 답변해 주세요.');
      return;
    }

    try {
      const response = await submitSurvey(questions, answers);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ProgressBar
          pageIndex={pageIndex}
          maxPage={maxPage}
        />
        <QuestionPage
          pageIndex={pageIndex}
          questionList = {questions}
          answers={answers}
          setAnswers={setAnswers}
        />
        <SurveyNavigation
          pageIndex={pageIndex}
          maxPage={maxPage}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default SurveyPage;