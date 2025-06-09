import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './Share.css';

const data = [
  { subject: "A", value: 80 },
  { subject: "B", value: 55 },
  { subject: "C", value: 70 },
  { subject: "D", value: 60 },
  { subject: "E", value: 90 },
  { subject: "F", value: 40 },
];

function Share() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [copySuccess, setCopySuccess] = useState('');
  const handleShare = async () => {
    const shareUrl = window.location.href;
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile && navigator.share) {
      try {
        await navigator.share({ url: shareUrl });
      } catch (err) {
        console.error('공유 실패:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopySuccess('링크가 복사되었습니다.');
      } catch (err) {
        console.error('복사 실패:', err);
      }
    }
  };

  // 쿼리 파라미터 읽기
  const rawName = searchParams.get('name') || '';
  const rawType = searchParams.get('type') || '';
  const rawDesc = searchParams.get('desc') || '';
  const rawImg = searchParams.get('img') || '';

  // 쿼리 값 디코딩
  const name = decodeURIComponent(rawName);
  const type = rawType;
  const desc = decodeURIComponent(rawDesc);
  const imgUrl = decodeURIComponent(rawImg);

  const goToSurvey = () => {
    // /survey로 이동 (기존 쿼리는 모두 제거됨)
    navigate('/survey');
  };

  return (
    <section className="share-container">
      <h1>설문 결과</h1>
      <div className="result-card">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Profile"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <p>
          <strong>이름:</strong> {name}
        </p>
        <p>
          <strong>유형:</strong> {type}
        </p>
        <div className="type-image">
          {imgUrl && <img src={imgUrl} alt={`${type} 이미지`} />}
        </div>
        <p className="description">{desc}</p>
      </div>
      <button className="again-btn" onClick={goToSurvey}>
        유형검사하러가기
      </button>
      <button className="share-btn" onClick={handleShare}>
        공유하기
      </button>
      {copySuccess && <p className="copy-success">{copySuccess}</p>}
    </section>
  );
}

export default Share;