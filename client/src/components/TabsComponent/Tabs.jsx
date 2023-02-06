import React from 'react';
import { useState } from 'react';
import TabTitle from './TabTitle';
import './Tabs.scss';

const Tabs = ({ children, defaultTab, categoryTitle }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  return (
    <div className="category-tabs">
      <div className="category-titles_section">
        <h3 key={categoryTitle}>{categoryTitle}</h3>
        <ul>
          {children.map((tabItem, index) => (
            <TabTitle
              key={tabItem.key}
              title={tabItem.props.productType.label}
              index={index}
              isActive={index === activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </div>
      {children[activeTab]}
    </div>
  );
};

export default Tabs;
