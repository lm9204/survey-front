import React from 'react';
import { getRecommendedActivities } from '../utils/activityRecommendation';
import styles from '../styles/ActivityRecommendation.module.css';

function ActivityRecommendation() {
  const activities = getRecommendedActivities();

  return (
    <div className={styles.activitySection}>
      <h2 className={styles.sectionTitle}>여가활동 추천</h2>
      <ul className={styles.activityList}>
        {activities.map((act, idx) => (
          <li key={idx} className={styles.activityItem}>
            {act}
            <span className={styles.actions}>👍 👎</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityRecommendation;