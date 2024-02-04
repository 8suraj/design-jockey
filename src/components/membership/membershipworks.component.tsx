import m1 from '../../assets/svgs/membershipworks/m1.svg';
import m2 from '../../assets/svgs/membershipworks/m2.svg';
import m3 from '../../assets/svgs/membershipworks/m3.svg';
import Button from '../button/button.component';
import Header1 from '../header/header.component';
const data = [
	{
		imgae: m1,
		content:
			'Signup and subscribe to a plan and get an unlimited request access  ',
	},
	{
		imgae: m2,
		content:
			'Receive your designs within the predefined timeline of your design request. Monday to friday',
	},
	{
		imgae: m3,
		content:
			'Unlimited revisions until you’re 100% satisfied',
	},
];
export default function MembershipWorks() {
	return (
		<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
			<div className='   flex flex-col gap-5 px-6 md:px-14 py-12 xl:px-4'>
				<div className='flex w-full'>
					<div className='lg:w-7/12 m1:w-full'>
						{/* <h1 className='text-color-primary md:text-left text-center  capitalize text-2xl md:text-4xl lg:text-5xl pt-4 pr-28 m1:pr-0'>
							how membership works
						</h1> */}
						<Header1 text='how membership works' />
						<h4 className='text-white font-SFPro md:text-left text-center  m1:text-[.7rem] text-[.7rem]   md:text-[.7rem] pt-4'>
							Perks so good you'll never need to go anywhere
							else for your design. Seriously.
						</h4>
					</div>
					<div className='lg:flex hidden w-5/12 h-fit justify-end '>
						<Button
							text='See Plans'
							className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6 lg:w-5/12 xl:w-4/12 w-10/12 '
							onClick={(e) => console.log(e)}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-5 flex-wrap w-full sm:flex-row justify-center sm:gap-1 lg:gap-2 	'>
					{data.map((e) => (
						<div className='flex flex-col justify-center gap-2   w-full sm:w-[49%] md:w-[49%]  lg:w-[32.5%]'>
							<div className='rounded-full bg-color-primary flex items-center justify-center h-28 m1:h-24 p-4 lg:h-[7.5rem] xl:h-[8.5rem] lg:p-6 '>
								<img
									src={e.imgae}
									alt=''
									className='h-full  '
								/>
							</div>

							<p className='text-center font-SFPro m1:text-[.7rem] text-[.7rem]   md:text-[.8rem] m1:px-0 lg:px-12 2xl:px-16 py-2'>
								{e.content}
							</p>
						</div>
					))}
				</div>
				<div className=' w-full flex justify-center lg:hidden'>
					<Button
						text='Add on'
						className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6 lg:w-5/12 xl:w-4/12 w-10/12 '
						onClick={(e) => console.log(e)}
					/>
				</div>
			</div>
		</section>
	);
}
