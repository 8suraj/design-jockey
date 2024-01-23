import m1 from '../../assets/svgs/membership/1.svg';
import m2 from '../../assets/svgs/membership/2.svg';
import m3 from '../../assets/svgs/membership/3.svg';
import m4 from '../../assets/svgs/membership/4.svg';
import m5 from '../../assets/svgs/membership/5.svg';
import m6 from '../../assets/svgs/membership/6.svg';
import Button from '../button/button.component';
const data = [
	{
		imgae: m1,
		header: 'Unlimited Requests',
		content:
			'Signup and subscribe to a plan and get an unlimited request access ',
	},
	{
		imgae: m2,
		header: 'Fixed Monthly Rate',
		content:
			'Signup and subscribe to a plan and get an unlimited request access ',
	},
	{
		imgae: m3,
		header: 'Quick Response',
		content:
			'Signup and subscribe to a plan and get an unlimited request access ',
	},
	{
		imgae: m4,
		header: 'One Dashboard',
		content:
			'Signup and subscribe to a plan and get an unlimited request access ',
	},
	{
		imgae: m5,
		header: 'Top Tier Quality',
		content:
			'Signup and subscribe to a plan and get an unlimited request access ',
	},
	{
		imgae: m6,
		header: 'Tailored Service',
		content:
			'Signup and subscribe to a plan and get an unlimited request access ',
	},
];
export default function MembershipBenefits() {
	return (
		<section className='w-full '>
			<div className='w-10/12  m-auto flex flex-col gap-5 '>
				<div className='flex w-full'>
					<div className='lg:w-7/12 m1:w-full'>
						<h1 className='text-color-primary md:text-left text-center  capitalize text-2xl md:text-4xl lg:text-5xl pt-4 pr-28 m1:pr-0'>
							Membership benefits
						</h1>
						<h4 className='text-white font-SFPro md:text-left text-center  m1:text-[.7rem] text-[.7rem]   md:text-[.7rem] pt-4'>
							Perks so good you'll never need to go anywhere
							else for your design. Seriously.
						</h4>
					</div>
					<div className='lg:flex hidden w-5/12 h-fit justify-end '>
						<Button
							text='Add on'
							className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6 lg:w-5/12 xl:w-4/12 w-10/12 '
							onClick={(e) => console.log(e)}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-5 flex-wrap w-full sm:flex-row justify-center sm:gap-1 lg:gap-2 	'>
					{data.map((e) => (
						<div className='flex flex-col justify-center gap-2   w-full sm:w-[49%] md:w-[49%]  lg:w-[32.5%]'>
							<div className='rounded-full border-color-primary border-8 flex items-center justify-center h-28 m1:h-24 p-4 lg:h-[7.5rem] xl:h-[8.5rem] lg:p-6 '>
								<img
									src={e.imgae}
									alt=''
									className='h-full  '
								/>
							</div>
							<h3 className='text-center text-sm  '>
								{e.header}
							</h3>
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
