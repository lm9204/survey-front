import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => navigate('/')}>LOGO</div>
        <div className={styles.menu}>☰</div>
      </header>
      <main className={styles.container}>
        {children}
      </main>
    </div>
  );
}

export default Layout;