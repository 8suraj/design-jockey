import React from 'react';
import m1 from '../../assets/Db/Ellipse13.png';

const UserProfile = () => {
  return (
    <div className='text-[#171717] font-SFPro text-[14px] font-[400]'>
      <div className='text-[#C9C9C9] pb-2 border-b-2'>
        <h1 className='text-[15px] font-MExtended text-[#171717] -pb-3 font-medium'>User Profile</h1>
      </div>
      <form className=" mx-auto">
        <div>
          <div className=' flex justify-center gap-10 items-center'>
            <img src={m1} alt="" className='w-[96px] h-[96px] rounded-full object-fill' />
            <div>
              <div className="md:flex items-center mt-5">
                <div className="md:w-72 flex flex-col">
                  <label className="leading-none text-gray-800 ">First name</label>
                  <input tabindex="0" arial-label="Please input name" type="name" className=" leading-none text-[#f2f3f4] bg-[#F3F3F3] p-2 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder=" Name" />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-2">
                  <label className="leading-none text-gray-800 ">Last name</label>
                  <input tabindex="0" arial-label="Please input email address" type="name" className=" text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900 p-2 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder=" Email " />
                </div>
              </div>
              <div className="md:flex items-center mt-5">
                <div className="md:w-72 flex flex-col">
                  <label className="leading-none text-gray-800 ">Phone number</label>
                  <input type="name" className=" text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900  p-2 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder=" Company name" />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-2">
                  <label className="leading-none text-gray-800 ">Company name</label>
                  <input tabindex="0" arial-label="Please input country name" type="name" className=" text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900 p-2 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder=" Country name" />
                </div>
              </div>
            </div>
          </div>

          <div className="font-SFPro text-[14px] font-[400] flex justify-around border-t-2 mt-5 pt-3 border-[#C9C9C9]">
            <label for="email" className=" mb-2  ">Email</label>
            <input type="email" name="email" id="email" className=" w-60  text-[#939393]   focus:border-none text-[12px]   " placeholder="dhrubanathofficail@gmail.com " required />
            <p className='text-[#a9b2bb] text-[14px]'>Managed by Google</p>
          </div>

          <div className='flex justify-around gap-5 r border-t-2 mt-3 pt-5 border-[#C9C9C9] font-SFPro text-[14px] font-[400]'>
            <p className='font-medium '>Payment method</p>
            <div>
              <p className='font-medium '>Credit/ debit cards</p>
              <p className='text-[14px] text-[#a9b2bb] '>Connected cards will appear here listed
              </p>
            </div>
            <div>
              <h1 className='font-medium '>Add new card</h1>
              <div className='flex gap-1'>
                <input type="name" className=" text-[#f2f3f4] bg-[#f2f3f4] leading-none text-gray-900 p-1.2 ps-1 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please enter Card no" />

                <button className='bg-black  text-[#f8fbff] px-2 rounded-[5px] py-1  text-[12px]'>Add Card</button>
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
