import React from 'react';
import EntityFields from './components/EntityFields';
import UserFields from './components/UserFields';
import InterestFields from './components/InterestFields';
import styles from './Form.module.scss';
import AgreeFields from './components/AgreeFields';
import Submit from './components/Submit';

const Form = (): JSX.Element => {

  return (
    <form className={styles.form}>
      <h2 className={styles.title}>
        Заполните контактные данные
      </h2>
      <EntityFields />
      <UserFields />
      <InterestFields />
      <AgreeFields />
      <Submit />
    </form>
  );
};

export default Form;
