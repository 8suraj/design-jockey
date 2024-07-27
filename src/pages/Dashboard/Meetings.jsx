import React, { useState } from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
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
      <div className='flex justify-between'>
        <p className=' font-medium text-black'>All Meetings</p>
        <form className=" flex gap-2">
          <div className="relative flex  justify-between">
            <IoIosSearch size={25} className='absolute  mt-2 ml-2' />
            <input type="search" id="default-search" className=" border text-[#f2f3f4] bg-[#f2f3f4] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 " placeholder="Search " required />
          </div>
          <div className="relative  ">
            <MdOutlineDateRange size={25} className='absolute mt-2 ml-2' />
            <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className=" border text-[#f2f3f4] bg-[#f2f3f4] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 " placeholder="Select date" />
          </div>
          <button className="bg-[#0038FF] hover:bg-blue-400 text-white font-bold  px-8 rounded flex items-center">
            <IoMdAdd size={25} />
            <span>Create</span>
          </button>
        </form>

      </div>
      <hr className='my-3 ' />
      <div className="">
        <div className="inline-flex flex-col space-y-1 items-start justify-start h-full w-full">
          <div className="inline-flex space-x-32 items-start justify-start pr-32 h-full w-full">
            <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">M</p>
            <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">T</p>
            <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">W</p>
            <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">T</p>
            <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">F</p>
            <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">S</p>
            <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">S</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="inline-flex items-center justify-start h-full w-full">
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">01</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">02</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">03</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">04</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">05</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">06</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">07</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start w-full h-full">
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">08</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">09</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">10</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">11</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">12</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">13</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">14</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start w-full h-full">
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">15</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">16</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">17</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">18</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">19</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">20</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">21</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start h-full w-full">
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">22</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">23</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">24</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">25</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">26</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">27</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">28</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start w-full h-full">
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">29</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">30</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">31</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-sm font-medium text-gray-800">01</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-sm font-medium text-gray-800">02</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-sm font-medium text-gray-800">03</p>
              </div>
              <div className="flex items-start justify-start w-28 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p className="opacity-50 text-sm font-medium text-gray-800">04</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Meetings;
