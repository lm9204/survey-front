import React, { useState } from 'react';
import Layout from '../components/Layout';
import ActivityRecommendation from '../components/ActivityRecommendation';
import FeedbackModal from '../components/FeedbackModal';
import styles from '../styles/ResultPage.module.css';

function ResultPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitFeedback = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const dummyType = '창의적인 탐험가형';
  const dummyDesc = '새로운 경험을 즐기며, 도전적인 활동을 좋아하는 타입입니다. 다양한 사람과 소통하는 것도 즐깁니다.';

  return (
    <Layout>
      <h2 className={styles.title}>나의 유형은?</h2>
        <div className={styles.typeTitle}>{dummyType}</div>
      <div className={styles.typeBox}>
      </div>

      <ActivityRecommendation />

      <button className={styles.feedbackButton} onClick={handleSubmitFeedback}>피드백 제출</button>

      {isModalOpen && <FeedbackModal onClose={handleCloseModal} />}
    </Layout>
  );
}

export default ResultPage;