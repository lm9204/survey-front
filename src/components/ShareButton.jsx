import React from 'react';
import { Icon } from './Icon';
import styles from '../styles/ResultPage.module.css';

const ShareButton = ({ color, description, size, onClick }) => (
  <>
    <button className={styles.shareBtn} onClick={onClick}>
      <Icon name="ios_share" color={color} size={size} />
    </button>
    {description}
  </>
);

export default ShareButton;