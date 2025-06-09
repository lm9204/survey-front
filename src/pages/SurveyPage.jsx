import React, { useState } from 'react';
import Layout from '../components/Layout';
import QuestionPage from '../components/QuestionPage';
import SurveyNavigation from '../components/SurveyNavigation';
import ProgressBar from '../components/ProgressBar';

function SurveyPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const handleNext = () => {
    if (pageIndex < 2) setPageIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(prev => prev - 1);
  };

  return (
    <Layout>
      <div className="container">
        <ProgressBar pageIndex={pageIndex} />
        <QuestionPage pageIndex={pageIndex} />
        <SurveyNavigation
          pageIndex={pageIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </Layout>
  );
}

export default SurveyPage;