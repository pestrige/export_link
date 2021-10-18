import axios, {AxiosResponse, AxiosError} from 'axios';

const SERVER_URL = 'https://my-json-server.typicode.com/pestrige/export_link';
const REQUEST_TIMEOUT = 5000;

const createApi = () => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: REQUEST_TIMEOUT,
  });

  // TODO: add interceptors if need
  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (error: AxiosError) => {
    const { response } = error;
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi();
