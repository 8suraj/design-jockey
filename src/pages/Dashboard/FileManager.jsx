import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import m1 from '../../assets/Db/Vector8.png';
import { IoChevronDownSharp } from "react-icons/io5";
const FileManager = () => {

  return (
    <div className=''>
      <div className='flex justify-between'>
        <p className='text-[15px] text-[#171717] font-MExtended leading-3 font-[400] '>File manager</p>
        <form className=" flex gap-5">
        <div className="relative flex  justify-between">
            <IoIosSearch size={20} className='absolute  mt-1.5 ml-2' />
            <input type="search" className=" border text-[#939393] bg-white border-gray-300  text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 ps-7 h-7  " placeholder="Search " required />
          </div>
          <div className="relative flex  ">
            <MdOutlineDateRange size={18} className='absolute mt-1.5 ml-2' />
            <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className=" border text-[#939393] bg-white border-gray-300  text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 ps-7 h-7 " placeholder="Select date" />
            <IoChevronDownSharp size={17} className='-ml-7 mt-2' />
          </div>
          <button className="bg-[#0038FF] hover:bg-blue-400 text-white font-[400] font-MExtended  text-[15px] px-5 rounded flex items-center justify-center">
          <IoMdAdd size={20} />
            <span>Folder</span>
          </button>
        </form>
      </div>
   
      <div className="container mx-auto text-[#C9C9C9] pt-4 border-t-2 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div> <div className="">
            <svg className="w-24 h-24 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="lightgray" stroke="darkgray" stroke-width="1">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <p className='flex justify-around text-[12px] text-[#171717]
'>
              <span>Web designing</span>
              <span>...</span>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default FileManager;
