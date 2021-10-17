import React from 'react';
import InputCheckbox from '../../InputCheckbox/InputCheckbox';
import { useSelector } from 'react-redux';
import { getAgree } from '../../../store/selectors';
import styles from '../Form.module.scss';

const AgreeFields = () => {
  const isAgree = useSelector(getAgree);

  return (
    <div className={styles.agree_wrapper}>
      <InputCheckbox
        checked={isAgree}
        label='Подтверждаю, что являюсь уполномоченным представителем указанного юридического лица или индивидуального предпринимателя'
      />
    </div>
  );
};

export default AgreeFields;
