import React from 'react';
import classNames from 'classnames';
import styles from './FormSection.module.scss';
import Form from '../Form/Form';

const FormSection = (): JSX.Element => {
  return (
    <section className={classNames('container', styles.section)}>
      <h1 className={styles.title}>Запросить демо-доступ</h1>
      <p className={styles.text}>
        Доступ к платформе возможен исключительно для
        представителей юридических лиц или индивидуальных предпринимателей
      </p>
      <Form />
    </section>
  );
};

export default FormSection;
