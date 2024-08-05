import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
import UserProfile from './UserProfile';
import CreateBrief from './CreateBrief';
import AssignJob from './AssignJob';
import Progress from './Progress';
import FileManager from './FileManager';
import Meetings from './Meetings';
import Plans from './Plans';

const MainComponents = () => {
  const components = {
    Brief: <CreateBrief />,
    AssignJob: <AssignJob />,
    Progress: <Progress />,
    FileManager: <FileManager />,
    Meetings: <Meetings />,
    Plans: <Plans />,
    UserProfile: <UserProfile />
  };

  const [activeContent, setActiveContent] = useState("UserProfile");

  const handleContentChange = (contentKey) => {
    setActiveContent(contentKey);
  };

  return (
    <div className='bg-white text-[#5c5e60] font-SFPro'>
      <Navbar onContentChange={handleContentChange} />
      <div className="flex flex-col w-full md:flex-row md:min-h-screen">
        <Sidebar activeItem={activeContent} onContentChange={handleContentChange} />
        <div className="flex flex-col w-full md:w-3/4">
          <MainContent content={components[activeContent]} />
        </div>
      </div>
    </div>
  );
};

export default MainComponents;
