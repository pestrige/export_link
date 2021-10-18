import React, { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import api from '../../services/api';
import { CustomSelectProps } from './CustomSelect.props';
import DropdownIndicator from './DropDownIndicator';
import classNames from 'classnames';
import { IData, IOption } from '../../types/interfaces';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setSelect } from '../../store/inputReducer';
import { adaptDataFromServer, adaptOptionsToStore, findValue, showToast } from '../../utils/common';
import styles from './CustomSelect.module.scss';

const customStyles: StylesConfig = {
  control: (styles, {menuIsOpen, isFocused }) => ({
    ...styles,
    minHeight: '45px',
    border: 'none',
    outline: menuIsOpen || isFocused ? '2px solid var(--primary-80)' : '2px solid transparent',
    backgroundColor: 'var(--background)',
    transition: 'outline 0.3s',
    cursor: 'pointer',
    '@media(min-width: 768px)': {
      minHeight: '56px'
    }
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: 12,
    fontWeight: 300,
    color: 'var(--basic-80)',
    fontFamily: 'var(--font)',
    '@media(min-width: 768px)': {
      fontSize: 15,
    }
  }),
  valueContainer: (styles) => ({
    ...styles,
    paddingLeft: '15px',
    '@media(min-width: 768px)': {
      paddingLeft: '20px',
    }
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    paddingRight: '15px',
  }),
};

const CustomSelect = ({
  value,
  name,
  placeholder,
  options = [],
  link = '',
  multiselect = false,
  clearable = true,
  required = true,
  classes = '',
}: CustomSelectProps): JSX.Element => {

  const [asyncOptions, setAsyncOptions] = useState<IOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  // TODO: add types
  const handleChange = (option: any, type: any) => {
    switch (type.action) {
      case 'clear':
        dispatch(setSelect({value: '', type: name}));
        return;
      case 'select-option':
        const data = Array.isArray(option) ? adaptOptionsToStore(option) : option;
        dispatch(setSelect(data));
        return;
      case 'remove-value':
        const removedData = option.length ? adaptOptionsToStore(option) : {value: '', type: name};
        dispatch(setSelect(removedData));
        return;
      default:
        break;
    }
  };

  const handleBlur = () => {
    if (required && !value) {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (value && isError) {
      setIsError(false);
    }
  }, [value, isError]);

  useEffect(() => {
    if (!link) {
      return;
    }
    setIsLoading(true);
    api.get<IData[]>(link).then(({data}) => {
      const adaptedData = adaptDataFromServer(data, name);
      setAsyncOptions(adaptedData);
    })
      .catch(() => showToast('Ошибка загрузки'))
      .finally(() => setIsLoading(false));

  }, [link, name]);

  return (
    <div className={classNames(styles.wrapper, classes, {[styles.error]: isError})}>
      <Select
        options={link ? asyncOptions : options}
        value={findValue(value, link ? asyncOptions : options)}
        name={name}
        placeholder={`${placeholder} ${required ? '*' : ''}`}
        closeMenuOnSelect={!multiselect}
        isMulti={multiselect}
        isClearable={clearable}
        styles={customStyles}
        isLoading={isLoading}
        isDisabled={isLoading}
        onChange={handleChange}
        onBlur={handleBlur}
        components={{ DropdownIndicator }}
        className={isError ? styles.select_error : ''}
      />
      {isError &&
        <p className={styles.error_text}>Обязательное поле</p>
      }
    </div>
  );
};

export default CustomSelect;
