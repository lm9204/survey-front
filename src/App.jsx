import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SurveyPage from './pages/SurveyPage';
import ResultPage from './pages/ResultPage';
import { getCreatedUserID } from './services/userService';

function App() {
  useEffect(() => {
    getCreatedUserID()
      .catch(err => console.error('ID 초기화 실패', err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;