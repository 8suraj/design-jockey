import { useEffect, useState } from 'react';
import cross from './cross.svg';
import plus from './plus.svg';
import H1 from '../header/header.component';
import { Transition } from '@headlessui/react';
import { useRecoilState } from 'recoil';
import { faqState } from '../../store/store';
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
	question: string;
	content: string;
	id: string;
}
const FaqItems = (props: FaqItemsProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [faqId, setFaqId] = useRecoilState(faqState);
	useEffect(() => {
		if (faqId !== props.id) {
			setIsOpen(false);
		}
	}, [faqId]);
	return (
		<div className='bg-[#121212] rounded-2xl cursor-pointer'>
			<div
				className='flex justify-between bg-black3 rounded-2xl items-center m2:px-8 py-5 m1:px-4
			  gap-2 m1:text-[.7rem] m2:text-[.8rem]  m3:text-[.85rem] md:text-[.9rem] '
				onClick={() => {
					setFaqId(props.id);
					setIsOpen(!isOpen);
				}}>
				<span className='w-[90%] '>{props.question}</span>
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
				show={faqId === props.id && isOpen}
				enter='transition-opacity ease-in-out duration-200'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition-opacity ease-in-out duration-200'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'>
				<div className='m2:px-8 py-5 m1:px-4 m1:text-[.7rem] m2:text-[.8rem]  m3:text-[.85rem] md:text-[.9rem] font-SFPro'>
					{props.content}
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
					{data.map((e, i) => (
						<FaqItems
							content={e}
							question={e}
							key={i}
							id={i.toString()}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
