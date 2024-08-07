import React, { useState } from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";

const Meetings = () => {
  const [date, setDate] = useState(new Date());

  const handleSearchChange = (event) => {
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleCreateClick = () => {
  };
  return (
    <div>
      <div className='flex justify-between items-center  border-b-2 pb-3 text-[#C9C9C9]  '>
      <div className=' '>
          <h1 className='text-[15px] leading-4 font-MExtended text-[#171717] -pb-3 font-[400]'>All Meetings</h1>
        </div>
       
        <form className=" flex gap-5">
          <div className="relative flex  justify-between">
            <IoIosSearch size={20} className='absolute  mt-1.5 ml-2' />
            <input type="search" className=" border-[2px] text-[#939393] bg-white border-gray-300  text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[350px] ps-7 h-[38px] " placeholder="Search Files " required />
          </div>
          <div className="relative  flex  ">
            <MdOutlineDateRange size={18} className='absolute mt-1.5 ml-2' />
            <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className=" border-[2px] text-[#939393] bg-white border-gray-300  text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-7 h-[38px] " placeholder="Date created" />
            <IoChevronDownSharp size={17} className='-ml-7 mt-2' />
          </div>
          <button className="bg-[#0038FF] hover:bg-blue-400 text-white px-2 font-[400] font-MExtended  text-[15px] w-[140px] h-[38px] rounded flex items-center gap-2 justify-center">
            <IoMdAdd size={20} />
            <span>Folder</span>
          </button>
        </form>
      </div>
      <div className="calendly-container">
      <iframe
        src="https://calendly.com/info-designjockey/45min"
        width="100%"
        frameBorder="0"
        onLoad={() => console.log('Calendly iframe loaded')}
        style={{ minHeight: '500px', border: 'none' }}
      />
    </div>
     
    </div>


  );
};

export default Meetings;
