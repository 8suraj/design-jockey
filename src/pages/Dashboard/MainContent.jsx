import React from 'react';

const MainContent = ({ content }) => {
  return (
    <div className="p-4 ">
      <div className=" rounded-md p-4">
        {content}
      </div>
    </div>
  );
};

export default MainContent;
