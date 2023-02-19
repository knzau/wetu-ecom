import axios from 'axios';
import { BASE_URL } from './utils';

export const makeRequest = axios.create({
  baseURL: BASE_URL + '/api',
  headers: {
    Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN
  }
});
