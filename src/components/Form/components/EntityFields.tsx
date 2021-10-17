import React from 'react';
import Input from '../../Input/Input';
import { ApiRoutes, InputName, SelectName } from '../../../types/enums';
import styles from '../Form.module.scss';
import CustomSelect from '../../CustomSelect/CustomSelect';
import FieldSet from '../../FieldSet/FieldSet';
import { useSelector } from 'react-redux';
import { getCategory, getCompany, getCountry } from '../../../store/selectors';

const EntityFields = () => {
  const company = useSelector(getCompany);
  const category = useSelector(getCategory);
  const country = useSelector(getCountry);

  return (
    <FieldSet title='Юридическое лицо'>
      <Input
        name={InputName.company}
        value={company}
        label='Название юридического лица'
        classes={styles.input_wide}
      />
      <CustomSelect
        value={category}
        placeholder='Категория'
        name={SelectName.category}
        link={ApiRoutes.categories}
      />
      <CustomSelect
        value={country}
        placeholder='Страна'
        name={SelectName.country}
        link={ApiRoutes.countries}
      />
    </FieldSet>
  );
};

export default EntityFields;
