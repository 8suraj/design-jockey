import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import m1 from '../../assets/Db/Vector8.png';
const FileManager = () => {
  const images = [

    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
    m1,m1,
   
   


  ];
  return (
    <div className=''>
      <div className='flex justify-between'>
        <p className='text-lg font-medium'>File manager</p>
        <form className=" flex gap-5">
          <div className="relative flex ">
            <IoIosSearch size={25} className='absolute  mt-2 ml-2' />
            <input type="search" id="default-search" className="block w-full text-[#f2f3f4] bg-[#f2f3f4]  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Files" required />
          </div>
          <div className="relative  ">
            <MdOutlineDateRange size={25} className='absolute mt-2 ml-2' />
            <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className="text-[#f2f3f4] bg-[#f2f3f4] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Date created" />
          </div>
          <button className="bg-[#0038FF] hover:bg-blue-400 text-white font-bold  px-8 rounded flex items-center">
            <IoMdAdd size={25} />
            <span>Folder</span>
          </button>
        </form>
      </div>
      <hr className='my-5' />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {images.map((src, index) => (
            <div key={index} className="w-full">
              <div className="h-20 w-full bg-white">
                <img src={src} alt={`img-${index}`} className="w-full h-full object-contain" />
              </div>
              <div className="text-center text-[#727171]  text-[12px] font-normal mt-1 flex justify-around ">
                <span>Web designing</span>
                <span>...</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileManager;
