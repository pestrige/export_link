import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import { InputProps } from './Input.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setInput } from '../../store/inputReducer';
import { InputType } from '../../types/enums';
import styles from './Input.module.scss';
import { validateEmail } from '../../utils/validate';

const Input = ({
  name,
  value,
  label,
  type = InputType.text,
  required = true,
  classes = '',
  ...props
}: InputProps): JSX.Element => {

  const dispatch = useDispatch<AppDispatch>();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const validateValue = (value: string) => {
    switch (type) {
      case InputType.email:
        if ((validateEmail(value) && isError) || (!required && !value)) {
          setIsError(false);
        }
        if (!validateEmail(value) && value) {
          setIsError(true);
          setErrorText('Неправильный e-mail');
          return;
        }
        break;
      default:
        if (value && isError) {
          setIsError(false);
        }
        break;
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    validateValue(value);
    dispatch(setInput({value, type: name}));
  };

  const handleBlur = () => {
    if (required && !value) {
      setIsError(true);
      setErrorText('Обязательное поле');
    }
  };

  return (
    <div
      className={classNames(
        styles.wrapper,
        classes,
        {[styles.error]: isError},
      )}
    >
      <input
        type={type}
        className={styles.input}
        id={`${name}-input-id`}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={label}
        {...props}
      />
      <label className={styles.label} htmlFor={`${name}-input-id`}>
        {`${label} ${required ? '*' : ''}`}
      </label>
      {isError &&
      <>
        <button
          className={styles.cancel_button}
          type="button"
          aria-label="Очистить поле"
          onClick={() => dispatch(setInput({value: '', type: name}))}
        />
        <span className={styles.error_text}>
          {errorText}
        </span>
      </>
      }
    </div>
  );
};

export default Input;
