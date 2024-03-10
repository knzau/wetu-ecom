import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL;

export const makeRequest = axios.create({
  baseURL: BASE_URL + '/api',
  headers: {
    Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN
  }
});
