import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import { InputCheckboxProps } from './InputCheckbox.props';
import styles from './InputCheckbox.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setAgree } from '../../store/inputReducer';

const InputCheckbox = ({
  label,
  classes = '',
  required = true,
  ...props
}: InputCheckboxProps): JSX.Element => {

  const dispatch = useDispatch<AppDispatch>();
  const [isError, setIsError] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const isChecked = evt.target.checked;
    const errorFlag = !isChecked && required;
    setIsError(errorFlag);
    dispatch(setAgree(isChecked));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label_wrapper}>
        <input
          className={classNames('visually-hidden', styles.checkbox)}
          type='checkbox'
          onChange={handleChange}
          {...props}
        />
        <span className={classNames(styles.custom_checkbox, {[styles.error]: isError})} />
        <span className={classNames(styles.label_text, {[styles.error]: isError})}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default InputCheckbox;
