import H1 from '../header/header.component';
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
	return (
		<div className='flex justify-between bg-black3 rounded-2xl items-center m2:px-8 py-8 m1:px-4  gap-2 m1:text-[.7rem] m2:text-[.8rem]  m3:text-[.85rem] md:text-[.9rem]'>
			<span className=''>{content}</span>
			<span className='text-base'>+</span>
		</div>
	);
};
export default function Faq() {
	return (
		<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
			<div className='  m-auto flex flex-col gap-8  px-6 md:px-14 py-12 xl:px-4'>
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
