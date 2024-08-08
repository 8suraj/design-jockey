import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import m1 from '../../assets/Db/Group90.png';
import { IoChevronDownSharp } from "react-icons/io5";
const CreateBrief = () => {
  const images = [
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },


  ];
  return (
    <div className='text-black '>
      <div className='flex justify-between'>
        <div className='text-[#C9C9C9] pb-2'>
          <h1 className='text-[15px] leading-4 font-MExtended text-[#171717] -pb-3 font-[400]'>All Briefs</h1>
        </div>
        <form className=" flex gap-5">
          <div className="relative flex  justify-between">
            <IoIosSearch size={20} className='absolute  mt-1.5 ml-2' />
            <input type="search" className=" border-[2px] text-[#939393] bg-white border-gray-300  text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[350px] ps-7 h-[38px] " placeholder="Search Brief " required />
          </div>
          <div className="relative  flex  ">
            <MdOutlineDateRange size={18} className='absolute mt-1.5 ml-2' />
            <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className=" border-[2px] text-[#939393] bg-white border-gray-300  text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-7 h-[38px] " placeholder="Date created" />
            <IoChevronDownSharp size={17} className='-ml-7 mt-2' />
          </div>
          <button className="bg-[#0038FF] hover:bg-blue-400 text-white px-2 font-[400] font-MExtended  text-[15px] w-[140px] h-[38px] rounded flex items-center gap-2 justify-center">
            <IoMdAdd size={20} />
            <span>Create</span>
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 text-[#C9C9C9] pt-4 border-t-2 mt-5">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover rounded-lg" />

          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateBrief;
