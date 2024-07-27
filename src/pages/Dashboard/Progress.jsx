import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { FiEye, FiUpload } from 'react-icons/fi';
import { MdOutlineDateRange } from "react-icons/md";
import { SiZincsearch } from "react-icons/si";
const Progress = () => {

  const images = [
    'https://cdn.zeebiz.com/sites/default/files/2023/07/24/252651-delhi-weather-today-forecast.jpg?im=FitAndFill=(1200,800)',
    'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg',
    'https://cdn.zeebiz.com/sites/default/files/2023/07/24/252651-delhi-weather-today-forecast.jpg?im=FitAndFill=(1200,800)',
    'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg',
    'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg',

  ];
  return (
    <div className=''>
      <div className='flex justify-between'>
        <p className='text-lg font-medium'>Progress</p>
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
        <p className='text-lg font-semibold'>Attachment</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8">
          {images.map((src, index) => (
            <div key={index} className="flex items-start flex-col">
              <div className="relative flex justify-center items-center bg-gray-100 ">
                <img src={src} alt={`img-${index}`} className="object-contain" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
                  <div className="flex justify-center items-center p-2 bg-[#818486] rounded-full border-2 border-gray-300">
                    <FiEye className="text-white hover:text-gray-500" size={12} />
                  </div>
                  <div className="flex justify-center items-center p-2 bg-[#818486]  rounded-full border-2 border-gray-300">
                    <FiUpload className="text-white hover:text-gray-500" size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-5'>
          <button type="button" className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Approve</button>
          <button type="button" className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Download all</button>
        </div>
        <hr className='my-5' />
        <div>
          <div className="w-full flex gap-10">
            <label className="text-base font-semibold leading-none text-gray-800 ">Comment</label>
            <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" className="h-40 w-[70%] text-[#f2f3f4] bg-[#f2f3f4] text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"></textarea>
            <button type="button" className="text-white h-12 bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 ">Comment</button>
          </div>
        </div>
        <hr className='my-5' />
        <div className='flex justify-between'><h1 className=' font-medium'>File Link</h1>
          <div className='flex gap-5 items-center '>
            <SiZincsearch size={25} />
            <p className='bg-[#ebeef0]  p-2'>https://www.google.com/search?sca_esv=ra</p>
          </div>
          <button type="button" className="text-white  bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-10 ">Copy</button>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
