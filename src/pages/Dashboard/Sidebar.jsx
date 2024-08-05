import React from 'react';
import { PiToolboxFill } from "react-icons/pi";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { HiArchive, HiOutlineFolder } from "react-icons/hi";

const Sidebar = ({ activeItem, onContentChange }) => {
  const menuItems = [
    { label: "Create Brief", icon: PiToolboxFill, value: "Brief" },
    { label: "Assign Job", icon: HiOutlineFolder, value: "AssignJob" },
    { label: "Progress", icon: FaCheckCircle, value: "Progress" },
    { label: "File Manager", icon: HiArchive, value: "FileManager" },
    { label: "Meetings", icon: BsFillGrid3X3GapFill, value: "Meetings" },
    { label: "Plans", icon: IoIosListBox, value: "Plans" },
    { label: "User Profile", icon: FaUser, value: "UserProfile" },
  ];

  return (
    <ul className="space-y-2 px-14 shadow-sm mt-5 text-black text-[14px] font-[400]">
      {menuItems.map(item => (
        <li key={item.value}>
          <button
            className={`flex items-center p-3 px-10 w-full rounded-lg ${
              activeItem === item.value ? 'bg-[#A0A0A0] text-white' : 'hover:bg-[#F3F3F3]'
            }`}
            onClick={() => onContentChange(item.value)}
          >
            <item.icon className={`w-4 h-4 transition duration-75 ${activeItem === item.value ? 'text-white' : 'text-gray-500 group-hover:text-gray-900'}`} />
            <span className="ms-3">{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
