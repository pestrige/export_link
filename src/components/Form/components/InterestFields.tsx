import React from 'react';
import FieldSet from '../../FieldSet/FieldSet';
import CustomSelect from '../../CustomSelect/CustomSelect';
import TextArea from '../../TextArea/TextArea';
import { ApiRoutes, InputName, SelectName } from '../../../types/enums';
import { useSelector } from 'react-redux';
import { getComment, getIndustry, getLang, getMarkets } from '../../../store/selectors';
import styles from '../Form.module.scss';

const InterestFields = () => {
  const markets = useSelector(getMarkets);
  const lang = useSelector(getLang);
  const industry = useSelector(getIndustry);
  const comment = useSelector(getComment);

  const selects = [
    {name: SelectName.markets, placeholder: 'Целевые рынки', value: markets, link: ApiRoutes.markets, isMulti: true, classes: '' },
    {name: SelectName.lang, placeholder: 'Предпочтительный язык', value: lang, link: ApiRoutes.lang, isMulti: false, classes: '' },
    {name: SelectName.industry, placeholder: 'Интересующие отрасли', value: industry, link: ApiRoutes.industry, isMulti: true, classes: styles.input_wide },
  ];

  return (
    <FieldSet title='Профессиональные интересы'>
      {selects.map((props, index) => (
        <CustomSelect
          key={index.toString()}
          multiselect={props.isMulti}
          {...props}
        />
      ))}
      <TextArea
        name={InputName.comment}
        placeholder='Сообщение'
        classes={styles.input_wide}
        value={comment}
      />
    </FieldSet>
  );
};

export default InterestFields;
