import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <span className={styles.ring1} />
        <span className={styles.ring2} />
      </div>
    </div>
  );
};

export default Spinner;
