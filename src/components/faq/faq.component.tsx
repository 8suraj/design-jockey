import { useState } from 'react';
import cross from './cross.svg';
import plus from './plus.svg';
import H1 from '../header/header.component';
import { Transition } from '@headlessui/react';

const data = [
	"Why wouldn't I just hire a full-time designer?",
	'Is there a limit to how many requests I can have?',
	'How fast will I receive my designs?',
	'Who are the designers?',
	'How does the pause feature work?',
	'What programs do you design in?',
	'How do I request designs?',
	"What if I don't like the design?",
	'What if I only have a single request?',
];

interface FaqItemsProps {
	content: string;
}
const FaqItems = ({ content }: FaqItemsProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div className='bg-[#121212] rounded-2xl'>
			<div
				className='flex justify-between bg-black3 rounded-2xl items-center m2:px-8 py-5 m1:px-4
			  gap-2 m1:text-[.7rem] m2:text-[.8rem]  m3:text-[.85rem] md:text-[.9rem] '
				onClick={() => setIsOpen(!isOpen)}>
				<span className='w-[90%] '>{content}</span>
				<span className=' w-[10%] justify-end hidden lg:flex'>
					{!isOpen ? (
						<Transition
							show={!isOpen}
							enter='transition-opacity ease-in-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-in-out duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<img src={plus} alt='' className='w-[1rem]' />
						</Transition>
					) : (
						<Transition
							show={isOpen}
							enter='transition-opacity ease-in-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-in-out duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<img
								src={cross}
								alt=''
								className='w-[1rem]'
							/>
						</Transition>
					)}
				</span>
			</div>
			<Transition
				show={isOpen}
				enter='transition-opacity ease-in-out duration-300'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition-opacity ease-in-out duration-300'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'>
				<div className='m2:px-8 py-5 m1:px-4 m1:text-[.7rem] m2:text-[.8rem]  m3:text-[.85rem] md:text-[.9rem] font-SFPro'>
					What programs do you design in? What programs do
					you design in? What programs do you design in?
				</div>
			</Transition>
		</div>
	);
};
export default function Faq() {
	return (
		<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
			<div className='  m-auto flex flex-col gap-8  px-6 md:px-14  xl:px-4 py-4 pb-[6rem] md:py-10 md:pb-20'>
				<H1 text='FAQs' />
				<div className='w-full flex flex-col gap-2'>
					{' '}
					{data.map((e) => (
						<FaqItems content={e} />
					))}
				</div>
			</div>
		</section>
	);
}
