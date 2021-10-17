import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputCheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> {
  label: string;
  classes?: string;
}
