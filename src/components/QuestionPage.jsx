import React from 'react';
import styles from '../styles/QuestionPage.module.css';

function QuestionPage({ pageIndex, questionList, answers, setAnswers }) {
  const pageQuestions = questionList.slice(pageIndex * 4, (pageIndex + 1) * 4);

  const handleAnswer = (questionIdx, value) => {
    const globalIndex = pageIndex * 4 + questionIdx;
    const newAnswers = [...answers];
    newAnswers[globalIndex] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className={styles.questionPage}>
      {pageQuestions?.map((question, idx) => (
        <div key={idx} className={styles.questionBlock}>
          <p className={styles.questionText}>Q{pageIndex * 4 + idx + 1}. {question.content}</p>
          <div className={styles.scale}>
            {[1, 2, 3, 4, 5].map((value, index) => {
              let sizeClass = '';
              if (index === 0 || index === 4) sizeClass = styles.sizeLarge;
              else if (index === 1 || index === 3) sizeClass = styles.sizeMedium;
              else sizeClass = styles.sizeSmall;

              return (
                <div key={value} className={styles.scaleItem}>
                  <button
                    className={`${styles.scaleButton} ${sizeClass} ${answers[pageIndex * 4 + idx] === value ? styles.selected : ''}`}
                    onClick={() => handleAnswer(idx, value)}
                  >
                  </button>
                  {index === 0 && <div className={styles.label}>매우 아니다</div>}
                  {index === 4 && <div className={styles.label}>매우 그렇다</div>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;