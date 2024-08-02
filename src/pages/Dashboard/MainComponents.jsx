import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
import UserProfile from './UserProfile'; 
import Invite from './Invite';
import CreateBrief from './CreateBrief';
import AssignJob from './AssignJob';
import Progress from './Progress';
import FileManager from './FileManager';
import Meetings from './Meetings';
import Plans from './Plans';


const MainComponents = () => {
  const components = {
    Dashboard: <div>Dashboard Content</div>,
    Profile: <UserProfile />,
    Invite: <Invite/>,
    Store: <div>Store Content</div>,
    Cart: <div>Cart Content</div>,
    Brief: <CreateBrief />,
    Job: <AssignJob />,
    Progress: <Progress />,
    FileManager: <FileManager />,
    Meetings: <Meetings />,
    Plans:  <Plans />,
  };
 
  const navbarData = [
    { label: "Dashboard", value: "Dashboard" },
    { label: "Profile", value: "Profile" },
    { label: "Invite", value: "Invite" },
    { label: "Store", value: "Store" },
    { label: "Cart", value: "Cart" },
  ];

  const [activeContent, setActiveContent] = useState(components.Profile); 

  const handleContentChange = (contentKey) => {
    setActiveContent(components[contentKey]);
  };

  return (
    <div className='bg-white text-[#5c5e60] font-SFPro'>
      <Navbar data={navbarData} onContentChange={handleContentChange} />
      <div className="flex flex-col w-full md:flex-row md:min-h-screen">
        <Sidebar activeItem={activeContent} onContentChange={handleContentChange} />
        <div className="flex flex-col w-full md:w-3/4">
          <MainContent content={activeContent} />
        </div>
      </div>
    </div>
  );
};

export default MainComponents;
