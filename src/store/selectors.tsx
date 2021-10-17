import { createSelector } from 'reselect';
import { RootState } from './index';
import { SelectName } from '../types/enums';
import { validateEmail } from '../utils/validate';

export const getCompany = ({input}: RootState) => input.company;
export const getName = ({input}: RootState) => input.name;
export const getSurname = ({input}: RootState) => input.surname;
export const getAppointment = ({input}: RootState) => input.appointment;
export const getEmail = ({input}: RootState) => input.email;
export const getCategory = ({input}: RootState) => input[SelectName.category];
export const getCountry = ({input}: RootState) => input[SelectName.country];
export const getMarkets = ({input}: RootState) => input[SelectName.markets];
export const getLang = ({input}: RootState) => input[SelectName.lang];
export const getIndustry = ({input}: RootState) => input[SelectName.industry];
export const getComment = ({input}: RootState) => input.comment;
export const getAgree = ({input}: RootState) => input.agree;

export const getIsDisabled = createSelector(
  [
    getEmail,
    getCompany,
    getName,
    getSurname,
    getAppointment,
    getCategory,
    getCountry,
    getMarkets,
    getLang,
    getIndustry,
    getAgree,
  ],
  (email, ...args) => {
    const isEmailValid = validateEmail(email);
    return [isEmailValid, ...args].every((item) => Boolean(item));
  },
);

export const getDataToServer = createSelector(
  [
    getCompany,
    getName,
    getSurname,
    getAppointment,
    getEmail,
    getCategory,
    getCountry,
    getMarkets,
    getLang,
    getIndustry,
    getComment,
  ],
  (company_name, name, surname, position, corporate_email, user_category, user_country, country, lang, industry, comment) => {
    return {
      company_name,
      corporate_email,
      country,
      industry,
      lang,
      name,
      position,
      surname,
      user_category,
      user_country,
      comment,
    };
  }
);
