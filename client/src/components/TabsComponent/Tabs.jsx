import React from 'react';
import { useState } from 'react';
import TabTitle from './TabTitle';
import './Tabs.scss';

const Tabs = ({ children, defaultTab, tabTitle, parentClassName, sectionClassName }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  return (
    <div className={parentClassName}>
      <div className={sectionClassName}>
        <h3 key={tabTitle}>{tabTitle}</h3>
        <ul>
          {children.map((tabItem, index) => (
            <TabTitle
              key={tabItem.key}
              title={tabItem.props.label}
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
