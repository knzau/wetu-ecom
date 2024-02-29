import axios from 'axios';
import { makeRequest } from '../makeRequests';
import qs from 'qs';

export const fetchDataFromApi = async (url) => {
  const getCancelSource = axios.CancelToken.source();
  const cancelToken = getCancelSource.token;

  try {
    const res = await makeRequest.get(url, cancelToken);
    if (res?.data) {
      return res.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getQuery = (query) => qs.stringify(query, { encodeValuesOnly: true });

export const defaultProductFilters = {
  populate: '*',
  filters: {},
  pagination: {
    pageSize: 8
  }
};
