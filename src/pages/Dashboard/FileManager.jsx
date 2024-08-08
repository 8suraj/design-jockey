import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import m1 from '../../assets/Db/Vector8.png';
import { IoChevronDownSharp } from "react-icons/io5";
const FileManager = () => {

  return (
    <div className=''>
      <div className='flex justify-between'>
        <div className='text-[#C9C9C9] pb-2'>
          <h1 className='text-[15px] leading-4 font-MExtended text-[#171717] -pb-3 font-[400]'>File manager</h1>
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
