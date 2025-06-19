import React from 'react';
import { Icon } from './Icon';
import styles from '../styles/Toast.module.css';

const Toast = ({ type, message, subMessage, visible }) => {
  if (!visible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.icon}>
        <Icon name={type} size={24} />
      </div>
      <div className={styles.text}>
        <div className={styles.main}>{message}</div>
        {subMessage && <div className={styles.sub}>{subMessage}</div>}
      </div>
    </div>
  );
};

export default Toast;