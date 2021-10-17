import React from 'react';
import classNames  from 'classnames';
import logo from '../../assets/images/logo.svg';
import logoMobile from '../../assets/images/logo-mobile.svg';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.wrapper, 'container')}>
        <picture>
          <source srcSet={logoMobile} media='(max-width: 1199px)' type='image/svg+xml' />
          <img src={logo} alt='Логотип компании' />
        </picture>
        <div className={styles.menu_wrapper} />
      </div>
    </header>
  );
};

export default Header;
