import { DetailedHTMLProps, FieldsetHTMLAttributes } from 'react';

export interface FieldSetProps
  extends DetailedHTMLProps<
    FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> {
  title: string;
}
