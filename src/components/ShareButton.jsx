import React from 'react';
import { Icon } from './Icon';
import styles from '../styles/ResultPage.module.css';

const ShareButton = ({ color, description, size }) => (
  <>
    <button className={styles.shareBtn}>
      <Icon name="ios_share" color={color} size={size} />
    </button>
    {description}
  </>
);

export default ShareButton;