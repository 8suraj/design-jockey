import React from 'react';
import { IoMdAdd, IoIosSearch } from 'react-icons/io';
import { MdOutlineDateRange } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa6';
import Board from '@lourenci/react-kanban';
import '@lourenci/react-kanban/dist/styles.css';
import { IoChevronDownSharp } from 'react-icons/io5';
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
					{ id: 12, title: 'Branding' },
					{ id: 13, title: 'Mobile  design' },
				],
			},
			{
				id: 4,
				title: 'Done',
				cards: [{ id: 14, title: 'Branding' }],
			},
		],
	};

	return (
		<div className=' '>
			<div className='flex justify-between items-center text-[#C9C9C9] pb-4 border-b-2 mb-5'>
				<p className='text-[15px] text-[#171717] font-MExtended leading-3 font-[400]'>
					Assign jobs
				</p>
				<div className='relative flex  '>
					<MdOutlineDateRange
						size={18}
						className='absolute mt-1.5 ml-2'
					/>
					<input
						id='datepicker-autohide'
						datepicker
						datepicker-autohide
						type='text'
						className=' border text-[#939393] bg-white   text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-32 ps-7 h-7 '
						placeholder='Select date'
					/>
					<IoChevronDownSharp
						size={17}
						className='-ml-7 mt-2'
					/>
				</div>
			</div>



			<Board
				initialBoard={boardData}
				renderCard={({ title }) => (
					<div className='p-2 mb-3 w-36 mx-2 text-center bg-[#FF00000D] rounded-md text-black  '>
						{title}
					</div>
				)}
			/>
		</div>
	);
};

export default AssignJob;
