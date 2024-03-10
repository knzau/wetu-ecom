import { useQuery } from 'react-query';
import { fetchDataFromApi } from '../utils/api';
import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

const useFetch = (URL, keys = [], options = {}) => {
  const setLoading = useStoreActions((actions) => actions.loadingModel.setLoading);
  const fetchData = () => fetchDataFromApi(URL);
  const { data, isLoading } = useQuery(keys, fetchData, { ...options });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return { data, isLoading };
};
export default useFetch;
