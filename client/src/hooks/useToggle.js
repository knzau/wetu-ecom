import { useCallback, useState } from 'react';

const useToggle = () => {
  const [toggleValue, setToggle] = useState(false);
  const [toggleKey, setToggleKey] = useState('');

  const handleToggle = useCallback(
    (key) => {
      setToggle((toggleValue) => {
        if (toggleKey === key) {
          return false;
        }
        return !toggleValue;
      });
      setToggleKey((prevKey) => (prevKey === key ? '' : key));
    },
    [toggleKey]
  );

  return {
    toggleValue,
    handleToggle,
    toggleKey
  };
};

export default useToggle;
