import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './TextArea.module.scss';
import { TextAreaProps } from './TextArea.props';
import { setInput } from '../../store/inputReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { InputName } from '../../types/enums';

const TextArea = ({
  placeholder,
  required,
  classes = '',
  ...props
}: TextAreaProps): JSX.Element => {

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value;
    dispatch(setInput({value, type: InputName.comment}));
  };

  return (
    <div className={classNames(styles.wrapper, classes)}>
      <textarea
        className={styles.textarea}
        placeholder={`${placeholder} ${required ? '*' : ''}`}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default TextArea;
