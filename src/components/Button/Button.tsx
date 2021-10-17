import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

const Button = ({
  children,
  disabled,
  classes = '',
  ...props
}: ButtonProps): JSX.Element => {

  return (
    <div>
      <button
        className={classNames(styles.button, {[styles.disabled]: disabled})}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
