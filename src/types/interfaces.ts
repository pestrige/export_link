import { SelectName } from './enums';

export interface IData {
  id: string;
  name: string;
}

export interface IOption {
  value: string | string[];
  label: string;
  type: SelectName;
}
