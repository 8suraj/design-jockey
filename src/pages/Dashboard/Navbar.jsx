import React, { useState } from 'react';
import { RiNotification3Line } from 'react-icons/ri';
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import m1 from '../../assets/Db/Group.png';
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const navbarData = [
    { label: "Dashboard", value: "Dashboard", link: "/dashboard" },
    { label: "Profile", value: "Profile", link: "/profile" },
    { label: "Invite", value: "Invite", link: "/invite" },
    { label: "Store", value: "Store", link: "/store" },
    { label: "Cart", value: "Cart", link: "/cart" },
  ];

  return (
    <div className='border-b-2 text-[#454647] pt-5 text-[15px] leading-5 font-MExtended font-[400] border-[#C9C9C9]'>
      <nav className='flex justify-between  mx-[5%] items-center '>
        <div className="flex items-end  gap-10">
          <Link to="/dashboard">
            <img src={m1} alt="" className='w-10 h-12 p-2 ml-7' /></Link>
          {navbarData.map(({ label, value, link }) => (
            <Link
              key={value}
              to={link}
              className={`cursor-pointer px-4 py-2   rounded-t-md ${activeTab === value ? "border-b-[3px] border-[#939393]" : ""}`}
              onClick={() => handleTabChange(value)}
            >
              {label}
            </Link>
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
