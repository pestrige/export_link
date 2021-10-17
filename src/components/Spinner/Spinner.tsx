import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <RingLoader loading size={60} color='#0071B8' />
    </div>
  );
};

export default Spinner;
