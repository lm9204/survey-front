import React from 'react';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.menu}>☰</div>
      </header>
      <main className={styles.container}>
        {children}
      </main>
    </div>
  );
}

export default Layout;