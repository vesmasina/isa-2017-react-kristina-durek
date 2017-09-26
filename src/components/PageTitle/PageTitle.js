
import React from 'react';

import styles from './PageTitle.css';

export default ({text}) => (
  <div className={styles.titleContainer}>
    <span className={styles.txtTitle}>{text}</span>
  </div>
);
