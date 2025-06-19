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
      <div className={styles.container}>
        <div className={styles.mainContent}>

          <div className={styles.speechBubble}>나는 뭘 좋아하더라?</div>
          <h2 className={styles.description}>
            3가지 기준으로<br />
            나의 스타일을 알아보는
          </h2>
          <h1 className={styles.title}>여가 성향 검사</h1>
          <h1 className={styles.activityTitle}>Activity-I</h1>

          <svg width="30" height="30" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M14.3535 0C22.216 0.00015438 28.5897 6.37384 28.5898 14.2363C28.5898 17.8601 27.2345 21.1666 25.0049 23.6797L30.333 29.0078C31.2225 29.8973 31.2224 31.3399 30.333 32.2295C29.4434 33.1191 28.0009 33.1191 27.1113 32.2295L21.457 26.5752C19.3662 27.7816 16.9409 28.4736 14.3535 28.4736C6.49079 28.4736 0.116211 22.0991 0.116211 14.2363C0.116375 6.37375 6.4909 0 14.3535 0ZM14.3535 4.55566C9.00697 4.55566 4.67204 8.88982 4.67188 14.2363C4.67188 19.583 9.00686 23.918 14.3535 23.918C19.7 23.9178 24.0342 19.5829 24.0342 14.2363C24.034 8.88991 19.6999 4.55582 14.3535 4.55566Z" fill="black"/>
          </svg>
          <p className={styles.subtext}>
            총 8가지 유형 중 <br />
            나의 성향을 파악하고,<br /> <br />
            더 나에게 맞는 <br />
            여가 활동을 탐색해보세요.
          </p>

          <button className={styles.startButton} onClick={handleStartSurvey}>START</button>
        </div>
        <div className={styles.circle + ' ' + styles.orange}></div>
        <div className={styles.circle + ' ' + styles.blue}></div>
        <div className={styles.circle + ' ' + styles.purple}></div>
        <div className={styles.circle + ' ' + styles.yellow}></div>
        <div className={styles.circle + ' ' + styles.green}></div>
      </div>
    </Layout>
  );
}

export default MainPage;