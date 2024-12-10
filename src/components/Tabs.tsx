'use client'

import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Description');

  const tabs = ['Description', 'Additional Info', 'Reviews', 'Videos', 'Akbar'];

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex space-x-4 border-b-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="mt-4">
        {activeTab === 'Description' && <p>Product Description...</p>}
        {activeTab === 'Additional Info' && <p>Additional Info...</p>}
        {activeTab === 'Reviews' && <p>Customer Reviews...</p>}
        {activeTab === 'Videos' && <p>Video Content...</p>}
        {activeTab === 'Akbar' && <p>My Content...</p>}
      </div>
    </div>
  );
};

export default Tabs;
