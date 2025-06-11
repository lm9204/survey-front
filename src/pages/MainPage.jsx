import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import styles from '../styles/MainPage.module.css';

function MainPage() {
  const navigate = useNavigate();

  const handleStartSurvey = () => {
    navigate('/survey');
  };

  return (
    <Layout>
      <div className={styles.mainContent}>
        <div className={styles.speechBubble}>
          당신의 <b>여가 성향</b>, 얼마나 알고 있나요?
        </div>
        <h2>3가지 기준으로 나를 알아보는<br /><b>여가 성향 진단</b></h2>
        <h1>Activity-I</h1>
        <p className={styles.subtext}>
          총 8가지 유형 중 <br />
          나의 성향을 파악하고,<br />

          더 나에게 맞는 <br />
          여가 활동을 탐색해보세요.
        </p>
        <button className={styles.startButton} onClick={handleStartSurvey}>START</button>
      </div>
    </Layout>
  );
}

export default MainPage;