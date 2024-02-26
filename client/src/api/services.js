import axios from 'axios';
import { makeRequest } from '../makeRequests';

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
