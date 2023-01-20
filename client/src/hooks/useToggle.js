import { useCallback, useState } from 'react';

const useToggle = () => {
  const [toggleValue, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle((toggleValue) => !toggleValue);
  }, []);

  return {
    toggleValue,
    handleToggle
  };
};

export default useToggle;
