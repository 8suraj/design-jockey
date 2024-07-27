import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import m1 from '../../assets/Db/Group90.png';

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
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
    { src: m1, alt: 'Placeholder Image 1' },
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

      <div className='flex  justify-between'>
        <p className='text-lg font-medium '>All Briefs</p>
        <form className=" flex gap-5">
          <div className="relative flex ">
            <IoIosSearch size={25} className='absolute text-[#545556] bg-[#f2f3f4] mt-2 ml-2' />
            <input type="search" id="default-search" className="block w-full  ps-10 text-sm text-[#f2f3f4] bg-[#f2f3f4] border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Brief" required />
          </div>
          <div className="relative  text-[#515253] bg-[#f2f3f4]">
            <MdOutlineDateRange size={25} className='absolute mt-2 ml-2' />
            <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className="bg-gray-50 border border-gray-300 text-[#f2f3f4] bg-[#f2f3f4] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Date created" />
          </div>
          <button className="bg-[#0038FF] hover:bg-blue-400 text-white font-bold  px-8 rounded flex items-center">
            <IoMdAdd size={25} />
            <span>Folder</span>
          </button>
        </form>
      </div>
      <hr className='my-5' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
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
