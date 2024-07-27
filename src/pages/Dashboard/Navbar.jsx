import React, { useState } from 'react';
import { RiNotification3Line } from 'react-icons/ri';
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import m1 from '../../assets/Db/Group.png';

const Navbar = ({ onContentChange, data }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabChange = (value) => {
    setActiveTab(value);
    onContentChange(value);
  };

  return (
    <div className='border-b-2 text-[#454647] border-[#4a4c4e]  font-serif'>
      <nav className='flex justify-between  mx-[5%] items-center '>
        <div className="flex  gap-10">
        <img src={m1} alt="" className='w-16 h-14 p-2' />
          {data.map(({ label, value }) => (
            <div
              key={value}
              className={`cursor-pointer px-4 py-2 my-3 text-lg font-semibold rounded-t-md ${activeTab === value ? "bg-[#ebedef]" : ""}`}
              onClick={() => handleTabChange(value)}
            >
              {label}
            </div>
          ))}
        </div>
        <ul className='flex justify-center items-center gap-7'>
          <li className='w-7 h-7 flex justify-center items-center rounded-full '>
            <img src="/Group77.png" alt="" />
          </li>
          <li className='w-7 h-7'><img src="/Group7.png" alt="" /></li>
          <li className='flex justify-center font-semibold items-center text-lg '>
            <span>Account</span>
            <span><RiArrowDropDownLine size={25} /></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
