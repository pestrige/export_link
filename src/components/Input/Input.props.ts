import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { InputName, InputType } from '../../types/enums';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> {
  readonly name: InputName;
  readonly label: string;
  readonly type?: InputType;
  classes?: string;
}
