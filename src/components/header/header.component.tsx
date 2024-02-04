export default function Header1({
	text,
}: {
	text: string;
}) {
	return (
		<h1 className='text-color-primary text-center md:text-left  capitalize  text-[1.5rem] m3:text-[1.7rem] md:text-[2.3rem] lg:text-[2.9rem]  '>
			{text}
		</h1>
	);
}
