import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { FiEye, FiUpload } from 'react-icons/fi';
import { MdOutlineDateRange } from "react-icons/md";
import { SiZincsearch } from "react-icons/si";
import { IoChevronDownSharp } from "react-icons/io5";
const Progress = () => {

  const images = [
    '/processs.png',
    '/process.png',
    '/processs.png',
    '/process.png',
    '/processs.png',

  ];
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <div className='text-[#C9C9C9] pb-2'>
          <h1 className='text-[15px] font-MExtended text-[#171717] -pb-3 font-medium'>Progress</h1>
        </div>
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
        <p className='text-[14px] font-[400] text-[#171717] font-SFPro'>Attachment</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 mt-3">
          {images.map((src, index) => (
            <div key={index} className="flex ">
              <div className="relative ">
                <img src={src} alt={`img-${index}`} className=" w-[200px] h-[160px] rounded-md" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2">
                  <div className="  hover:text-gray-500  p-3 bg-[#00000050] rounded-full ">
                    <FiEye className="" size={14} />
                  </div>
                  <div className=" hover:text-gray-500  p-3 bg-[#00000050] rounded-full ">
                    <FiUpload className="" size={14} />
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-5 font-[400] text-[12px] font-SFPro'>
          <button type="button" className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-blue-300  rounded-lg  px-8 py-3 me-2 mb-2 ">Approve</button>
          <button type="button" className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-blue-300  rounded-lg   px-8 py-3 me-2 mb-2 ">Download all</button>
        </div>

        <div className='text-[#C9C9C9] pt-4 border-t-2 mt-5'>
          <div className="w-full flex gap-10">
            <label className="text-[14px] font-[400] text-[#171717] font-SFPro">Comment</label>
            <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" className="h-32 w-[50%] text-[#f2f3f4] bg-[#f2f3f4] text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none">Comment</textarea>
            <button type="button" className="text-white text-[12px] h-10 bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 font-[400] rounded-lg  px-8 py-3 me-2 mb-2 ">Comment</button>
          </div>
        </div>
        <hr className='my-5' />
        <div className='flex justify-between'><h1 className='text-[14px] font-[400] text-[#171717] font-SFPro'>File Link</h1>
          <div className='flex gap-5 items-center '>
            <SiZincsearch size={25} />
            <p className='font-SFPro font-[400] text-[12px]'>https://www.google.com/search?sca_esv=ra</p>
          </div>
          <button type="button" className="text-white font-[400] text-[12px] font-SFPro bg-black hover:bg-black focus:ring-4 focus:ring-blue-300  rounded-lg  px-8 py-3 me-2 mb-2 ">Copy</button>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
