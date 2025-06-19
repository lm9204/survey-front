// src/pages/ResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import styles from '../styles/ResultPage.module.css';
import ResultHeader from '../components/ResultHeader';
import TraitBars from '../components/TraitBars';
import TypeDescription from '../components/TypeDescription';
import SimilaritySection from '../components/SimilaritySection';
import ShareButton from '../components/ShareButton';
import RecommendationBox from '../components/RecommendationBox';
import { decodeResultData } from '../utils/base64Encoder';
import { getAimTypeData, getRecommendations, submitFeedbacks } from '../services/surveyService';
import { getSubmitted, setSubmitted } from '../services/userService';
import Toast from '../components/Toast';

function ResultPage() {
  const location = useLocation();
  const [isShared, setIsShared] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeData, setTypeData] = useState([]);
  const [traits, setTraits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [similarity, setSimilarity] = useState(5);
  const [feedbacks, setFeedbacks] = useState({});
  const [toast, setToast] = useState({ visible: false, type: '', message: '', subMessage: ''});

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const encoded = query.get('d');
    const share = query.get('share');
    const parsed = decodeResultData(encoded);
    if (parsed?.traits) {
      setTraits(parsed.traits);
      getAimTypeData(parsed.traits).then((data) => {
        setTypeData(data);
      });

      if (!share && !getSubmitted()) {
        getRecommendations(parsed.traits).then((res) => {
          const combined = [...(res.most_similar || []), ...(res.least_similar || [])];
          setRecommendations(combined);
        });
      } else {
        setIsShared(true);
      }
    }
  }, [location.search]);

  const showToast = (type, message, subMessage = '') => {
    setToast({ visible: true, type, message, subMessage});
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  }

  const handleFeedback = (activityObj, score) => {
    const { activity, similarity } = activityObj;
    setFeedbacks({
      ...feedbacks,
      [activity]: {
        activity,
        similarity,
        score,
      },
    });
  };

  const handleSubmitFeedback = () => {
    const allFilled = recommendations.every(
      (rec) => feedbacks[rec.activity] && typeof feedbacks[rec.activity].score === 'number'
    );

    if (!allFilled) {
      alert('모든 활동에 대해 피드백을 남겨주세요.');
      return;
    }

    setIsModalOpen(true);
  }

  const handleSubmitFeedbackModal = async (phone, isPrivacyChecked) => {
    const payload = Object.values(feedbacks).map(({ activity, similarity, score }) => {
      let preference = '';
      switch (score) {
        case 0:
          preference = 'like';
          break;
        case 1:
          preference = 'neutral';
          break;
        case 2:
          preference = 'dislike';
          break;
        default:
          preference = 'neutral';
      }
      return {
        activity,
        similarity,
        score: preference,
      };
    });

    try {
      if (!isPrivacyChecked) {
        showToast(
          'close',
          '개인정보 수집 및 이용에 동의해주세요.',
        );
        return;
      }

      const response = await submitFeedbacks(payload, phone);

      if (response) {
        setSubmitted();
        setIsModalOpen(false);
        showToast(
          'check',
          '피드백 제출 완료!',
          '번호 입력이후 기프티콘이 발송됩니다.'
        );
      } else {
        showToast(
          'close',
          '이미 제출한 휴대폰 번호입니다.'
        );
      }
    } catch (error) {
      console.log(error);
      showToast(
        'close',
        '제출이 되지 않았어요..',
        '잠시 후에 다시 시도해주세요!'
      );
    }
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <ResultHeader typeData={typeData} />
        <TraitBars traits={traits} />
        <TypeDescription typeData={typeData} />
        {!isShared && (
          <SimilaritySection similarity={similarity} setSimilarity={setSimilarity} />
        )}
        
        <div className={styles.shareButtons}>
          {!isShared && <ShareButton color="#ffffff" size={24} description={<>내 결과 <br /> 공유하기</>} />}
          <ShareButton color="#ffffff" size={24} description={<>친구도 <br /> 참여해보라고 하기</>} />
        </div>

        {!isShared && (
          <>
            <RecommendationBox
              recommendations={recommendations}
              feedbacks={feedbacks}
              handleFeedback={handleFeedback}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onSubmit={handleSubmitFeedback}
              onSubmitModal={handleSubmitFeedbackModal}
            />
            <Toast {...toast} />
          </>
        )}
      </div>
    </Layout>
  );
}

export default ResultPage;
