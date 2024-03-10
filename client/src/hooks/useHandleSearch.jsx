import { useState } from 'react';
import { fetchDataFromApi, getQuery } from '../api/services';
import { PRODUCTS_URL } from '../components/constant';

const useHandleSearch = () => {
  const [searchData, setSearchData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleClearSearch = () => {
    setSearchData([]);
    setIsFocused(false);
  };
  const onSearch = async (searchValue) => {
    const query = getQuery({
      filters: {
        title: {
          $contains: searchValue
        }
      },
      populate: '*'
    });

    try {
      setIsLoading(true);
      const data = await fetchDataFromApi(PRODUCTS_URL + query);
      if (data.length > 0) {
        setSearchData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { searchData, onSearch, handleClearSearch, handleInputFocus, isFocused, isLoading };
};

export default useHandleSearch;
