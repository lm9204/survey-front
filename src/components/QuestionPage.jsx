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
          <div className={styles.questionHeader}>
            <div className={styles.questionIconWrapper}>
              <svg className={styles.questionIcon} width="45" height="52" viewBox="0 0 45 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_284_366" fill="white">
                  <path d="M22.5 0C34.9264 0 45 10.0736 45 22.5C45 23.5281 44.9294 24.5398 44.7959 25.5312C44.7642 25.8946 44.7221 26.2537 44.6758 26.6094C44.6771 26.7336 44.6711 26.8603 44.6543 26.9893C42.9543 40.0299 32.4299 49.6531 19.4316 51.8047C17.0768 52.1945 15.6368 49.6053 16.9473 47.6104L18.8564 44.7041C8.16303 42.9626 0 33.6856 0 22.5C0 10.0737 10.0737 0.000164928 22.5 0Z"/>
                </mask>
                <path d="M22.5 0V-1H22.5L22.5 0ZM44.7959 25.5312L43.8048 25.3978L43.8017 25.4211L43.7997 25.4445L44.7959 25.5312ZM44.6758 26.6094L43.6842 26.4803L43.6751 26.5497L43.6758 26.6196L44.6758 26.6094ZM44.6543 26.9893L45.6459 27.1185L45.6459 27.1184L44.6543 26.9893ZM19.4316 51.8047L19.5949 52.7913H19.5949L19.4316 51.8047ZM16.9473 47.6104L16.1115 47.0613L16.1115 47.0613L16.9473 47.6104ZM18.8564 44.7041L19.6922 45.2532L20.5385 43.9649L19.0172 43.7171L18.8564 44.7041ZM22.5 0V1C34.3741 1 44 10.6259 44 22.5H45H46C46 9.52131 35.4787 -1 22.5 -1V0ZM45 22.5H44C44 23.4822 43.9326 24.4493 43.8048 25.3978L44.7959 25.5312L45.787 25.6647C45.9263 24.6302 46 23.5739 46 22.5H45ZM44.7959 25.5312L43.7997 25.4445C43.7697 25.7886 43.7294 26.1325 43.6842 26.4803L44.6758 26.6094L45.6674 26.7385C45.7147 26.3749 45.7588 26.0006 45.7921 25.618L44.7959 25.5312ZM44.6758 26.6094L43.6758 26.6196C43.6767 26.7048 43.6725 26.7844 43.6627 26.8602L44.6543 26.9893L45.6459 27.1184C45.6696 26.9363 45.6774 26.7623 45.6757 26.5991L44.6758 26.6094ZM44.6543 26.9893L43.6627 26.86C42.0272 39.406 31.8918 48.7286 19.2683 50.8181L19.4316 51.8047L19.5949 52.7913C32.9679 50.5777 43.8814 40.6539 45.6459 27.1185L44.6543 26.9893ZM19.4316 51.8047L19.2683 50.8181C18.5265 50.9409 17.9756 50.6111 17.6806 50.101C17.3761 49.5747 17.3391 48.8352 17.7831 48.1594L16.9473 47.6104L16.1115 47.0613C15.2449 48.3804 15.2727 49.933 15.9494 51.1025C16.6354 52.2884 17.982 53.0583 19.5949 52.7913L19.4316 51.8047ZM16.9473 47.6104L17.7831 48.1594L19.6922 45.2532L18.8564 44.7041L18.0207 44.1551L16.1115 47.0613L16.9473 47.6104ZM18.8564 44.7041L19.0172 43.7171C8.79966 42.0531 1 33.1874 1 22.5H0H-1C-1 34.1839 7.52639 43.8721 18.6957 45.6911L18.8564 44.7041ZM0 22.5H1C1 10.626 10.626 1.00016 22.5 1L22.5 0L22.5 -1C9.52146 -0.999828 -1 9.5214 -1 22.5H0Z" fill="black" mask="url(#path-1-inside-1_284_366)"/>
              </svg>
              <div className={styles.questionNumber}>
                Q{pageIndex * 4 + idx + 1}
              </div>
            </div>
            <p className={styles.questionTextInline}>{question.content}</p>
          </div>
          <div className={styles.scale}>
            <div className={styles.scaleSpacer} />
            {[1, 2, 3, 4, 5].map((value, index) => (
              <button
                key={value}
                className={`${styles.scaleButton} ${answers[pageIndex * 4 + idx] === value ? styles.selected : ''}`}
                onClick={() => handleAnswer(idx, value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className={styles.scaleLabels}>
            <span>매우 아니다</span>
            <span>보통이다</span>
            <span>매우 그렇다</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;