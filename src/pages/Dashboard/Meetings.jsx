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
      <div className='flex justify-between items-center  '>
      <div className='text-[#C9C9C9] pb-2'>
        <h1 className='text-[15px] font-MExtended text-[#171717] -pb-3 font-medium'>All Meetings</h1>
      </div>
        
        <form className=" flex gap-5">
          <div className="relative flex  justify-between">
            <IoIosSearch size={20} className='absolute  mt-1.5 ml-2' />
            <input type="search" className=" border text-[#939393] bg-white border-gray-300  text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 ps-7 h-7  " placeholder="Search " required />
          </div>
          <div className="relative flex  ">
            <MdOutlineDateRange size={18} className='absolute mt-1.5 ml-2' />
            <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className=" border text-[#000] bg-white border-gray-300  text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 ps-7 h-7 " placeholder="Select date" />
            <IoChevronDownSharp size={17} className='-ml-7 mt-2' />
          </div>
          <button className="bg-[#0038FF] hover:bg-blue-400 text-white font-[400] font-MExtended  text-[15px] px-5 rounded flex items-center">
            <IoMdAdd size={20} />
            <span>Create</span>
          </button>
        </form>

      </div>

      <div className="text-[#C9C9C9] pt-4 border-t-2 mt-5">
        <div className="inline-flex flex-col space-y-1 items-start justify-start h-full w-full">
          <div className="inline-flex space-x-[80px] items-start text-[#171717] justify-start pr-[120px] h-full w-full">
            <p className="w-11 h-full text-[12px] font-medium text-gray-800 uppercase">MON</p>
            <p className="w-11 h-full text-[12px] font-medium text-gray-800 uppercase">TUE</p>
            <p className="w-12 h-full text-[12px] font-medium text-gray-800 uppercase">WED</p>
            <p className="w-12 h-full text-[12px] font-medium text-gray-800 uppercase">THUR</p>
            <p className="w-12 h-full text-[12px] font-medium text-gray-800 uppercase">FRI</p>
            <p className="w-12 h-full text-[12px] font-medium text-gray-800 uppercase">SAT</p>
            <p className="w-12 h-full text-[12px] font-medium text-gray-800 uppercase">SUn</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="inline-flex  items-center justify-start h-full w-full">
              <div className="flex items-start justify-start w-24 h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">01</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">02</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">03</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">04</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">05</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">06</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">07</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start w-full h-full">
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">08</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">09</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">10</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">11</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">12</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">13</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">14</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start w-full h-full">
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">15</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">16</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">17</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">18</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">19</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">20</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">21</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start h-full w-full">
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">22</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">23</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">24</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">25</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">26</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">27</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">28</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start w-full h-full">
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">29</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">30</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="text-[12px] font-medium text-gray-800">31</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-[12px] font-medium text-gray-800">01</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-[12px] font-medium text-gray-800">02</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-[12px] font-medium text-gray-800">03</p>
              </div>
              <div className="flex items-start justify-start w-[80px] h-full pl-2 pr-[120px] pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-[12px] font-medium text-gray-800">04</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Meetings;
