import { useEffect, useState } from 'react';
import axios from 'axios';
import { makeRequest } from '../makeRequests';

const useFetch = (url, deps = []) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCancelSource = axios.CancelToken.source();

    const fetchFunc = async () => {
      const cancelToken = getCancelSource.token;

      try {
        setLoading(true);
        const res = await makeRequest.get(url, cancelToken);

        if (res?.data) {
          setData(res.data.data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };

    fetchFunc();

    return () => {
      getCancelSource.cancel('Previous request canceled');
    };
  }, [...deps]);

  return { loading, data, error };
};

export default useFetch;
