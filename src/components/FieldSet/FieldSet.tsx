import React from 'react';
import styles from './FieldSet.module.scss';
import { FieldSetProps } from './FieldSet.props';

const FieldSet = ({children, title}: FieldSetProps): JSX.Element => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{title}</legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
