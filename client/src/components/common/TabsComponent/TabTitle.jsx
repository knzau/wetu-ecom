import React, { useCallback } from 'react';

const TabTitle = (props) => {
  const { title, index, isActive, setActiveTab } = props;

  const handleSelectTab = useCallback(() => {
    setActiveTab(index);
  }, [setActiveTab, index]);

  return (
    <li className={`category_tab-title ${isActive ? 'active-tab' : ''}`}>
      <span onClick={handleSelectTab}>{title}</span>
    </li>
  );
};

export default TabTitle;
