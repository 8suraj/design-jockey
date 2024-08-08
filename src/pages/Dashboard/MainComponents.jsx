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
    <div className="bg-white text-[#5c5e60] font-SFPro h-screen">
    {/* Fixed Navbar */}
    <div className="fixed top-0 left-0 w-full z-10">
      <Navbar onContentChange={handleContentChange} />
    </div>
    
    <div className="flex pt-14 h-full">
      {/* Fixed Sidebar */}
      <div className="fixed top-16 left-0 w-full md:w-1/4 h-[calc(100%-4rem)] z-10">
        <Sidebar activeItem={activeContent} onContentChange={handleContentChange} />
      </div>
      
      {/* Scrollable Main Content */}
      <div className="ml-0 md:ml-[25%] w-full md:w-3/4 h-[calc(100vh-4rem)] overflow-y-auto">
        <MainContent content={components[activeContent]} />
      </div>
    </div>
  </div>
  
  );
};

export default MainComponents;
