import React from 'react';

const Plans = () => {
  return (
    <div>
      <h1 className='text-lg text-black font-medium'>Plan</h1>
      <hr className='my-5 text-black' />
      <div className="flex  items-stretch ">
        <input className="bg-gray-100 rounded-lg bg-[#ebedef] rounded-r-none placeholder:text-xl placeholder:font-bold  text-base leading-none text-gray-800  p-3 w-3/4 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="24 Hours" />
        <button className="w-36 rounded-l-none hover:bg-indigo-600 bg-[#0038FF] rounded text-base font-medium leading-none text-white p-3 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">See Plan</button>
      </div>
    </div>
  );
};

export default Plans;
