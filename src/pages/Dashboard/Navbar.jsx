import React, { useState } from 'react';
import { RiNotification3Line } from 'react-icons/ri';
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import m1 from '../../assets/Db/Group.png';
import { IoChevronDownSharp } from "react-icons/io5";

const Navbar = ({ onContentChange, data }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabChange = (value) => {
    setActiveTab(value);
    onContentChange(value);
  };

  return (
    <div className='border-b-2 text-[#454647] border-[#C9C9C9]  font-serif'>
      <nav className='flex justify-between  pt-2 mx-[5%] items-center '>
        <div className="flex  gap-10">
        <img src={m1} alt="" className='w-16 h-14 p-2' />
          {data.map(({ label, value }) => (
            <div
              key={value}
              className={`cursor-pointer px-4 py-2  text-[15px] font-MExtended font-[400] rounded-t-md ${activeTab === value ? "border-b-4 border-[#939393]" : ""}`}
              onClick={() => handleTabChange(value)}
            >
              {label}
            </div>
          ))}
        </div>
        <ul className='flex justify-center items-center gap-2'>
          <li className='w-7 h-7 flex justify-center items-center rounded-full '>
            <img src="/Group7.png" alt="" />
          </li>
          <li className='w-7 h-7'><img src="/Group77.png" alt="" /></li>
          <li className='flex justify-center font-semibold items-center  gap-2 text-[14px] '>
            <span className='text-[15px] font-MExtended font-[400]'>Account</span>
            <span><IoChevronDownSharp size={17} className='' /></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
