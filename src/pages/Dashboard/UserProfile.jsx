import React from 'react';
import m1 from '../../assets/Db/Ellipse13.png';

const UserProfile = () => {
  return (
    <div className='text-[#171717]'>
      <h1 className='text-lg text font-medium'>User Profile</h1>
      <hr className='my-3' />
      <form className=" mx-auto">
        <div>
          <div className=' flex justify-center gap-10 items-center'>
            <img src={m1} alt="" className='w-28 h-28 rounded-full object-fill' />
            <div>
              <div className="md:flex items-center mt-5">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800 ">First name</label>
                  <input tabindex="0" arial-label="Please input name" type="name" className="text-base leading-none text-[#f2f3f4] bg-[#f2f3f4] p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800 ">Last name</label>
                  <input tabindex="0" arial-label="Please input email address" type="name" className="text-base text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                </div>
              </div>
              <div className="md:flex items-center mt-5">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800 ">Phone number</label>
                  <input tabindex="0" role="input" arial-label="Please input company name" type="name" className="text-base text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900  p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input company name" />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800 ">Company name</label>
                  <input tabindex="0" arial-label="Please input country name" type="name" className="text-base text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                </div>
              </div>
            </div>
          </div>
          <hr className='my-5' />
          <div className=" flex justify-around m">
            <label for="email" className=" mb-2 text-sm font-medium text-gray-900 ">Email</label>
            <input type="email" name="email" id="email" className=" w-60 py-2 text-[#f2f3f4] bg-[#f2f3f4] px-0 focus:border-none text-sm  ps-3 border-0 border-b-2 border-[#252628]  " placeholder="dhrubanathofficail@gmail.com " required />
            <p className='text-[#a9b2bb] text-[14px]'>Managed by Google</p>
          </div>
          <hr className='my-5' />
          <div className='flex justify-around gap-5 items-center'>
            <p className='font-medium '>Payment method</p>
            <div>
              <p className='font-medium '>Credit/ debit cards</p>
              <p className='text-[14px] text-[#a9b2bb] '>Connected cards will appear here listed
              </p>
            </div>
            <div>
              <h1 className='font-medium '>Add new card</h1>
              <div className='flex gap-3'>
                <input tabindex="0" arial-label="Please input email address" type="name" className="text-base text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900 p-1 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please enter Card no" />

                <button className='bg-black  text-[#f8fbff] px-4 py-1 rounded-md text-sm'>Add Card</button>
              </div>
              <p className='text-[14px] text-[#a9b2bb] '>A temporary $0.5 charge that automatically
              </p>
              <p className='text-[14px] text-[#a9b2bb] '>refunds might be applied to verify your credit card at </p>
              <p className='text-[14px] text-[#a9b2bb]'>the start of your project</p>
            </div>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
