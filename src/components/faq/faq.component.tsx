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
export default function Faq() {
	return (
		<section className='w-full '>
			<div className='w-11/12  m-auto flex flex-col gap-8'>
				<h1 className='text-color-primary md:text-left text-center uppercase text-4xl pt-4'>
					Faqs
				</h1>
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
interface FaqItemsProps {
	content: string;
}
const FaqItems = ({ content }: FaqItemsProps) => {
	return (
		<div className='flex justify-between bg-black3 rounded-2xl items-center px-4 py-8  gap-2 m1:text-[.7rem] m2:text-[.8rem]  m3:text-[.85rem] md:text-[.9rem]'>
			<span>{content}</span>
			<span className='text-base'>+</span>
		</div>
	);
};
