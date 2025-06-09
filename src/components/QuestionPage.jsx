import React from 'react';
import { useRecoilState } from 'recoil';
import { surveyState } from '../recoil/surveyState';
import styles from '../styles/QuestionPage.module.css';

const questionList = [
  [ "새로운 사람들과 함께하는 활동이 즐겁다.",
    "많은 사람과 어울리고 나면 힘이 빠진다.",
    "새로운 사람과 대화하는 것은 부담된다.",
    "사람이 많은 것보다 혼자 있는 것이 편하다." ],
  [ "도전적인 활동을 선호한다.",
    "새로운 경험을 시도하는 편이다.",
    "반복적인 활동은 지루하다.",
    "유연한 일정이 좋다." ],
  [ "혼자 하는 취미를 즐긴다.",
    "가족과 함께하는 활동이 좋다.",
    "활동적인 취미를 선호한다.",
    "잔잔한 활동을 좋아한다." ]
];

function QuestionPage({ pageIndex }) {
  const [answers, setAnswers] = useRecoilState(surveyState);

  const handleAnswer = (questionIdx, value) => {
    const globalIndex = pageIndex * 4 + questionIdx;
    const newAnswers = [...answers];
    newAnswers[globalIndex] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className={styles.questionPage}>
      {questionList[pageIndex].map((question, idx) => (
        <div key={idx} className={styles.questionBlock}>
          <p className={styles.questionText}>Q{pageIndex * 4 + idx + 1}. {question}</p>
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