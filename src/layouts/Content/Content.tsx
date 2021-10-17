import React from 'react';
import {ContentProps} from './Content.props';
import styles from './Content.module.scss';

const Content = ({children}: ContentProps): JSX.Element => {
  return (
    <main className={styles.main}>
      { children }
    </main>
  );
};

export default Content;
