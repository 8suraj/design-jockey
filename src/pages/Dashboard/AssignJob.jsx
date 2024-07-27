import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import Board from '@lourenci/react-kanban';
import '@lourenci/react-kanban/dist/styles.css';

const AssignJob = () => {
  const boardData = {
    columns: [
      {
        id: 1,
        title: 'All Briefs',
        cards: [
          { id: 1, title: 'Mobile System' },
          { id: 2, title: 'Website design' },
          { id: 3, title: 'Branding' },
          { id: 4, title: 'Emailer' },
          { id: 5, title: 'Outdoors' },
        ],
      },
      {
        id: 2,
        title: 'Priority',
        cards: [
          { id: 6, title: 'Website design' },
          { id: 7, title: 'Emailer' },
          { id: 8, title: 'Branding' },
          { id: 9, title: 'Outdoors' },
          { id: 10, title: 'Mobile app ' },
        ],
      },
      {
        id: 3,
        title: 'Ongoing',
        cards: [
          { id: 11, title: 'Website design' },
          { id: 12, title: 'Branding' }, ,
          { id: 13, title: 'Mobile  design' },
        ],
      },
      {
        id: 4,
        title: 'Done',
        cards: [

          { id: 14, title: 'Branding' },
        ],
      },
    ],
  };

  return (
    <div className="p-4 ">
      <div className='flex justify-between font'>
        <p className='text-lg font-medium'>Assign jobs</p>
        <div className="flex justify-center items-center rounded-lg text-[#525455] bg-[#f2f3f4] border border-gray-300  px-2 py-1">
          <MdOutlineDateRange size={20} className=' ml-2' />
          <input id="datepicker-autohide" type="text" className="text-[#f2f3f4] bg-[#f2f3f4] placeholder:pl-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="February" />
          <FaAngleDown size={20} className=' ' />
        </div>
      </div>
      <hr className='my-5' />
      <Board
        initialBoard={boardData}
        disableColumnDrag
        disableCardDrag
        renderCard={({ title }) => (
          <div className="p-2 mb-3 w-36 mx-2 text-center bg-[#FF00000D] rounded-md text-black  ">
            {title}
          </div>
        )}
      />
    </div>
  );
};

export default AssignJob;
