import { toast } from 'react-toastify';
import { Option } from '../components/CustomSelect/CustomSelect.props';
import { SelectName } from '../types/enums';
import { IData, IOption } from '../types/interfaces';

export const showToast = (message: string, isError: boolean = true) => isError
  ? toast.error(message, {position: 'top-center'})
  : toast.success(message, {position: 'top-center'});

export const findValue = (value: Option['value'], options: Option[]) => options.find((item) => item.value === value);

export const adaptOptionsToStore = (data: { value: string, label: string, type: SelectName }[]) => {
  const values: string[] = [];
  data.forEach(({value}) => {
    values.push(value);
  });
  return {label: data[0].label, type: data[0].type, value: values};
};

export const adaptDataFromServer = (data: IData[], type: SelectName): IOption[] => {
  return data.map(({id, name}) => ({value: id, label: name, type}));
};
