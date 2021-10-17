import React from 'react';
import classNames from 'classnames';
import createdBy from '../../assets/images/created-by.svg';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.wrapper)}>
        <p className={styles.text}>
          <span>2021 Export.Link</span>
          {/* TODO: replace with router link component */}
          <a href={'/#'} className={styles.agreement}>Соглашение о пользовании информационной системой</a>
        </p>
        <img src={createdBy} alt='Created by alt it'/>
      </div>
    </footer>
  );
};

export default Footer;
