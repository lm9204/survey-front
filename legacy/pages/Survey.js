import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Survey.css';

function Survey() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dummyAnswer, setDummyAnswer] = useState(''); // 더미 문항 값

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!dummyAnswer) {
      alert('더미 문항을 선택해주세요.');
      return;
    }

    // 여기에서 실제 점수 계산 로직을 넣을 수 있습니다.
    // 예시: 더미 점수를 기반으로 유형을 결정했다고 가정
    let calculatedType = 'TypeA';
    let calculatedDesc = '이것은 TypeA 유형에 대한 더미 설명입니다.';
    let imgUrl = 'https://via.placeholder.com/150?text=TypeA';

    // 간단히 예시: dummyAnswer가 2 이상이면 TypeB로 구분
    if (dummyAnswer === '2' || dummyAnswer === '3') {
      calculatedType = 'TypeB';
      calculatedDesc = '이것은 TypeB 유형에 대한 더미 설명입니다.';
      imgUrl = 'https://via.placeholder.com/150?text=TypeB';
    }

    // 쿼리스트링 생성 (encodeURIComponent 사용)
    const params = new URLSearchParams({
      name: encodeURIComponent(name),
      type: calculatedType,
      desc: encodeURIComponent(calculatedDesc),
      img: encodeURIComponent(imgUrl),
    }).toString();

    // /share?name=…&type=…&desc=…&img=… 로 이동
    navigate(`/share?${params}`);
  };

  return (
    <section className="survey-container">
      <h1>유형 검사 설문</h1>
      <form className="survey-form" onSubmit={handleSubmit}>
        {/* 이름 입력 */}
        <label htmlFor="name-input">이름</label>
        <input
          id="name-input"
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* 더미 문항 */}
        <div className="dummy-questions">
          <h2>더미 문항</h2>
          <p>문항 1: 아래 보기 중 하나를 선택해주세요.</p>
          <div className="options">
            <label>
              <input
                type="radio"
                name="dummy"
                value="1"
                checked={dummyAnswer === '1'}
                onChange={() => setDummyAnswer('1')}
              />{' '}
              보기 A
            </label>
            <label>
              <input
                type="radio"
                name="dummy"
                value="2"
                checked={dummyAnswer === '2'}
                onChange={() => setDummyAnswer('2')}
              />{' '}
              보기 B
            </label>
            <label>
              <input
                type="radio"
                name="dummy"
                value="3"
                checked={dummyAnswer === '3'}
                onChange={() => setDummyAnswer('3')}
              />{' '}
              보기 C
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          결과 보기
        </button>
      </form>
    </section>
  );
}

export default Survey;