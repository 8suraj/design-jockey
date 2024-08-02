import React from 'react';
import { HiOutlineDocumentText, HiOutlineUserGroup, HiOutlineClipboardCheck, HiOutlineFolder, HiOutlineCalendar, HiOutlineCollection, HiOutlineUser } from 'react-icons/hi';

const Sidebar = ({ activeItem, onContentChange }) => {
  const menuItems = [
    { label: "Create Brief", icon: HiOutlineDocumentText, value: "Brief" },
    { label: "Assign Job", icon: HiOutlineFolder, value: "Job" },
    { label: "Progress", icon: HiOutlineClipboardCheck, value: "Progress" },
    { label: "File Manager", icon: HiOutlineCollection, value: "FileManager" },
    { label: "Meetings", icon: HiOutlineUserGroup, value: "Meetings" },
    { label: "Plans", icon: HiOutlineCalendar, value: "Plans" },
    { label: "User Profile", icon: HiOutlineUser, value: "Profile" },
  ];

  return (
    <ul className="space-y-2 px-14 shadow-sm mt-5  text-black text-[14px] font-[400]">
      {menuItems.map(item => (
        <li key={item.value}>
          <button
            className={`flex items-center p-3 px-10 w-full  rounded-lg  hover:bg-gray-100 group ${activeItem && activeItem.props && activeItem.props.children === item.label ? 'bg-gray-100' : 'text-gray-900'
              }`}
            onClick={() => onContentChange(item.value)}
          >
            <item.icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
            <span className="ms-3">{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
