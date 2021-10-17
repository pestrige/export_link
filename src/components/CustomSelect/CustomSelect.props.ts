import { Props } from 'react-select';
import { ApiRoutes, SelectName } from '../../types/enums';
import { IOption } from '../../types/interfaces';

export interface Option {
  value: string | number | null | string[];
  label: string;
  type?: string;
}

export interface CustomSelectProps extends Props {
  options?: IOption[] | [];
  value: IOption['value'];
  placeholder: string;
  classes?: string;
  readonly link?: ApiRoutes | '';
  readonly name: SelectName;
  readonly required?: boolean;
  readonly multiselect?: boolean;
  readonly clearable?: boolean;
}
