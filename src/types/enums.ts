export enum InputName {
  company = 'company',
  name = 'name',
  surname = 'surname',
  appointment = 'appointment',
  email = 'email',
  comment = 'comment',
}

export enum SelectName {
  category = 'category',
  country = 'country',
  markets = 'markets',
  lang = 'lang',
  industry = 'industry',
}

export enum InputType {
  text = 'text',
  email = 'email',
  tel = 'tel',
  number = 'number',
}

// export enum ApiRoutes {
//   categories = 'https://export.alt-test.ru/api/v1/public/user_category/input_list',
//   countries = 'https://export.alt-test.ru/api/v1/public/user_country/input_list',
//   markets = 'https://export.alt-test.ru/api/v1/public/country/input_list',
//   lang = 'https://export.alt-test.ru/api/v1/public/lang/input_list',
//   industry = 'https://export.alt-test.ru/api/v1/public/industry/input_list',
//   submit = 'https://export.alt-test.ru/api/v1/public/auth/registration_demo',
// }

// FAKE API ROUTS
export enum ApiRoutes {
  categories = 'https://my-json-server.typicode.com/pestrige/export_link/user_category',
  countries = 'https://my-json-server.typicode.com/pestrige/export_link/country',
  markets = 'https://my-json-server.typicode.com/pestrige/export_link/country',
  lang = 'https://my-json-server.typicode.com/pestrige/export_link/lang',
  industry = 'https://my-json-server.typicode.com/pestrige/export_link/industry',
  submit = 'https://my-json-server.typicode.com/pestrige/export_link/registration_demo',
}
