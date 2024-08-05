import React from 'react';

const Plans = () => {
  return (
      <div className='text-[#171717] font-SFPro text-[14px] font-[400]'>
      <div className='text-[#C9C9C9] pb-2 border-b-2'>
        <h1 className='text-[15px] font-MExtended text-[#171717] -pb-3 font-medium'>Plans</h1>
      </div>
      <div className="flex  items-stretch mt-5 text-[#C9C9C9] ">
        <input className="bg-gray-100 rounded-lg bg-[#ebedef] rounded-r-none placeholder:text-[20px] placeholder:font-[400] placeholder:font-MExtended  text-base leading-none text-gray-800  p-3 w-3/4 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="24 Hours" />
        <button className="w-36 rounded-l-none hover:bg-indigo-600 bg-[#0038FF] rounded  leading-none text-white p-3 font-MExtended font-[400] trext-[15px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">See Plan</button>
      </div>
    </div>
  );
};

export default Plans;
