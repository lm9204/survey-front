import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 화면 크기 변경 시 메뉴가 열려 있다면 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // 메뉴 클릭 시 메뉴 닫기
  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* 로고: 클릭 시 /about 경로로 이동 */}
        <div className="navbar-logo" onClick={closeMenu}>
          <Link to="/about" className="logo-text">
            MyBrand
          </Link>
        </div>

        {/* 햄버거 메뉴 아이콘 (모바일) */}
        <div
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </div>

        {/* 메뉴 리스트 */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={closeMenu}>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active-link' : ''}
            >
              브랜딩 소개
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              to="/survey"
              className={location.pathname === '/survey' ? 'active-link' : ''}
            >
              설문조사
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;