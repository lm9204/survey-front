import React from 'react';
import styles from '../styles/FeedbackModal.module.css';

function FeedbackModal({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>피드백 감사합니다!</h3>
        <p>휴대폰 번호를 입력해주세요:</p>
        <input type="text" placeholder="휴대폰 번호 입력" className={styles.input} />
        <button className={styles.submitButton}>기프티콘 받기</button>
        <button className={styles.closeButton} onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default FeedbackModal;