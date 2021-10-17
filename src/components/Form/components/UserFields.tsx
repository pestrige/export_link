import React from 'react';
import Input from '../../Input/Input';
import FieldSet from '../../FieldSet/FieldSet';
import { InputName, InputType } from '../../../types/enums';
import { useSelector } from 'react-redux';
import { getAppointment, getEmail, getName, getSurname } from '../../../store/selectors';

const UserFields = () => {
  const name = useSelector(getName);
  const surname = useSelector(getSurname);
  const appointment = useSelector(getAppointment);
  const email = useSelector(getEmail);

  const fields = [
    {name: InputName.name, value: name, label: 'Имя', type: InputType.text},
    {name: InputName.surname, value: surname, label: 'Фамилия', type: InputType.text},
    {name: InputName.appointment, value: appointment, label: 'Должность', type: InputType.text},
    {name: InputName.email, value: email, label: 'E-mail', type: InputType.email},
  ];

  return (
    <FieldSet title='Представитель юридического лица'>
      {
        fields.map((props, index) => (
          <Input
            key={index.toString()}
            {...props}
          />
        ))
      }
    </FieldSet>
  );
};

export default UserFields;
