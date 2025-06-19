import React from 'react';
import { Icon } from './Icon';
import FeedbackModal from './FeedbackModal';
import styles from '../styles/ResultPage.module.css';

const RecommendationBox = ({ recommendations, feedbacks, handleFeedback, isModalOpen, setIsModalOpen, onSubmit, onSubmitModal }) => {
  return (
    <div className={styles.recommendBox}>
      <div className={styles.recommendTitle}>이런 활동은 어때요?</div>
      <p className={styles.recommendSub}>
        여러분들의 유형에 맞는<br /> 여가 활동을 조사하고 있어요 <br /><br />
        본인에게 맞는 활동 혹은<br />맞지 않는 활동을 체크해주세요
      </p>
      <div className={styles.feedbackGuide}>
        <div className={styles.feedbackGuideItem}>
          <Icon name="thumb_up" color="inherit" />
          <span className={styles.feedbackLabel}>맘에 들어요</span>
        </div>
        <div className={styles.feedbackGuideItem}>
          <Icon name="more_horiz" color="inherit" />
          <span className={styles.feedbackLabel}>모르겠어요</span>
        </div>
        <div className={styles.feedbackGuideItem}>
          <Icon name="thumb_down" />
          <span className={styles.feedbackLabel}>별로예요</span>
        </div>
      </div>
      <div className={styles.activityList}>
        {recommendations.map((actObj, idx) => {
          const act = actObj.activity;
          const feedback = feedbacks[act]?.score;

          return (
            <div className={styles.activityItem} key={idx}>
              <span className={styles.activityName}>{act}</span>
              <div className={styles.feedbackIcons}>
                <button
                  className={`${styles.iconBtn} ${feedback === 0 ? styles.active : ''}`}
                  onClick={() => handleFeedback(actObj, 0)}
                  aria-label="좋아요"
                >
                  <Icon name="thumb_up" color="inherit" />
                </button>
                <button
                  className={`${styles.iconBtn} ${feedback === 1 ? styles.active : ''}`}
                  onClick={() => handleFeedback(actObj, 1)}
                  aria-label="모르겠어요"
                >
                  <Icon name="more_horiz" color="inherit" />
                </button>
                <button
                  className={`${styles.iconBtn} ${feedback === 2 ? styles.active : ''}`}
                  onClick={() => handleFeedback(actObj, 2)}
                  aria-label="별로예요"
                >
                  <Icon name="thumb_down" color="inherit" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.submit} onClick={onSubmit}>피드백 제출</button>
      {isModalOpen && 
        <FeedbackModal
          onClose={() => setIsModalOpen(false)} 
          onSubmit={onSubmitModal}
        />}
    </div>
  );
};

export default RecommendationBox;