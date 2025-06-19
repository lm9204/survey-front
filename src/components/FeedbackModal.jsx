import React, { useState } from 'react';
import styles from '../styles/FeedbackModal.module.css';

function FeedbackModal({ onSubmit, onClose }) {
  const [phone, setPhone] = useState('');
  const [showPrivacyDetail, setShowPrivacyDetail] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>📌 피드백 감사합니다!</h3>
        <p>
          📩 <strong>소중한 의견</strong> 정말 고맙습니다.<br />
          감사의 마음으로 <strong>커피 기프티콘☕️</strong>을 보내드릴게요.<br />
          <strong>휴대폰 번호📱</strong>를 입력해주실 수 있나요?
        </p>

        <input
          type="text"
          placeholder="-없이 번호만 입력해주세요"
          className={styles.input}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          className={styles.submitNote}
          onClick={() => onSubmit('', true)}
        >
          번호 입력 없이 그냥 제출할래요
        </button>

        <button className={styles.submitButton} onClick={() => onSubmit(phone, isPrivacyChecked)}>
          기프티콘 받기
        </button>

        <div className={styles.privacyConsent}>
          <input
            type="checkbox"
            id="privacy"
            checked={isPrivacyChecked}
            onChange={(e) => setIsPrivacyChecked(e.target.checked)}
          />
          <label htmlFor="privacy">기프티콘 발송을 위한 </label>
          <span
            className={styles.underline}
            onClick={(e) => {
              e.stopPropagation(); // 혹시나 label 감싼다면 방어용
              setShowPrivacyDetail(true);
            }}
          >
            개인정보 수집 및 이용
          </span>
          <label htmlFor="privacy">에 동의합니다.</label>
        </div>

        {showPrivacyDetail && (
          <div className={styles.privacyDetail}>
            <ul>
              <li> 수집 항목: 휴대폰 번호</li>
              <li> 수집 목적: 기프티콘 발송</li>
              <li> 보유 기간: 발송 후 즉시 파기</li>
            </ul>
            <p>동의 거부 시 기프티콘은 제공되지 않으나, 피드백은 정상 제출됩니다.</p>
          </div>
        )}

        <button className={styles.closeButton} onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default FeedbackModal;