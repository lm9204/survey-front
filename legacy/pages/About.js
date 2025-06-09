import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-container">
      <h1>우리의 브랜딩</h1>
      <p>
        저희 MyBrand는 창의성과 혁신을 바탕으로 사람들의 일상에 가치를 더하는 것을 목표로 합니다.
        브랜드 철학은 단순히 로고와 색상이 아닌, 사용자에게 제공하는 경험과 스토리로 완성됩니다.
      </p>
      <h2>브랜드 철학</h2>
      <p>
        1) <strong>고객 중심</strong><br />
        고객의 필요와 피드백을 최우선으로 반영하여 언제나 더 나은 솔루션을 제공합니다.<br /><br />
        2) <strong>지속 가능성</strong><br />
        환경과 사회적 가치를 고려한 제품과 서비스를 개발하며, 장기적인 관점에서 브랜드를 성장시킵니다.<br /><br />
        3) <strong>투명성</strong><br />
        모든 과정에서 정직하고 투명한 소통을 통해 신뢰 관계를 구축합니다.
      </p>
      <h2>비전</h2>
      <p>
        기술과 디자인의 융합을 통해, 한 단계 더 나아간 사용자 경험을 제공하고
        전 세계 사람들에게 영감을 주는 브랜드가 되는 것입니다.
      </p>
      {/* 로고 누르면 About 페이지로 돌아오는 동작은 NavBar에서 처리합니다. */}
    </section>
  );
}

export default About;