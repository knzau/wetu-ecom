import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { get } from '../makeRequests';

const useFetch = (url, deps = []) => {
  const shouldFetch = useRef(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCancelSource = axios.CancelToken.source();

    const fetchProductCategories = async () => {
      const cancelToken = getCancelSource.token;

      try {
        setLoading(true);
        const res = await get(url, cancelToken);

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
    if (shouldFetch.current) {
      // prevent useEffect running twice using shouldFetch ref
      shouldFetch.current = false;
      fetchProductCategories();
    }
    return () => {
      getCancelSource.cancel('Previous request canceled');
    };
  }, [...deps]);

  return { loading, data, error };
};

export default useFetch;
