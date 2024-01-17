import './mem.css';
import Button from '../button/button.component.tsx';
const datas = [
	{
		plan: 'Monthly',
		price: '833',
		content1:
			'No minimum commitment. pause or cancel anytime.',
		content2: 'Paid monthly',
		bt: 'Buy now',
	},
	{
		plan: 'Quarterly',
		price: '812',
		content1: 'Save $250. Pause upto 3 times.',
		content2: 'Paid quarterly',
		bt: 'Buy now',
	},
	{
		plan: 'Yearly',
		price: '791',
		content1: 'Save $500. Pause upto 6 times.',
		content2: 'Paid yearly',
		bt: 'Buy now',
	},
	// {
	// 	plan: 'Monthly',
	// 	price: '625',
	// 	content1:
	// 		'Get a better website faster with Website development.',
	// 	content2: 'Requires subscription',
	// 	bt: 'Add on',
	// },
];
export default function Membership() {
	return (
		<section className='w-full '>
			<div className='w-11/12  m-auto flex flex-col gap-2'>
				<h1 className='text-color-primary md:text-left text-center uppercase text-2xl md:text-4xl pt-4'>
					membership levels
				</h1>
				<h4 className='text-white font-SFPro md:text-left text-center  m1:text-[.6rem] text-[.6rem]   md:text-[.7rem] pt-4'>
					choose a plan that’s right for you
				</h4>
				<div className='flex flex-col ctnr gap-3'>
					<div className='m1'>
						<MembershipItem
							plan={datas[0].plan}
							price={datas[0].price}
							content1={datas[0].content1}
							content2={datas[0].content2}
							bt={datas[0].bt}
						/>
					</div>
					<div className='q1'>
						<MembershipItem
							plan={datas[1].plan}
							price={datas[1].price}
							content1={datas[1].content1}
							content2={datas[1].content2}
							bt={datas[1].bt}
						/>
					</div>
					<div className='y1'>
						<MembershipItem
							plan={datas[1].plan}
							price={datas[1].price}
							content1={datas[1].content1}
							content2={datas[1].content2}
							bt={datas[1].bt}
						/>
					</div>
					<div className='wb1  '>
						<div className='flex flex-col  xl:flex-row justify-center items-center lg:items-start xl:items-center lg:justify-around  bg-black3 rounded-2xl  px-4 py-8 lg:px-12  gap-4 lg:gap-8 h-full'>
							<div className='flex flex-col lg:items-start items-center w-9/12 '>
								<h1 className='text-xl md:text-3xl    '>
									Website
									<span className='hidden xl:inline'>
										Development
									</span>
								</h1>
								<h1 className='text-xl md:text-3xl xl:hidden '>
									Development
								</h1>
								<div className='flex flex-col gap-1 items-center   font-SFPro m1:text-[.6rem] text-[.6rem]   md:text-[1rem] '>
									<span className=' block'>
										Get a better website faster with
										<br className='lg:hidden' /> Website
										development.
									</span>
								</div>
							</div>
							<div className='flex flex-col gap-1 items-center md:items-start'>
								<h1 className='text-2xl lg:text-3xl'>
									$833/m
								</h1>
								<span className='font-SFPro m1:text-[.6rem] text-[.6rem]   md:text-[.7rem] text-grey-light'>
									Requires subscription
								</span>
							</div>
							<Button
								text='Add on'
								className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6  xl:w-4/12 w-10/12 '
								onClick={(e) => console.log(e)}
							/>
						</div>
					</div>
					<div className='wm1'>
						<div className='flex flex-col justify-center items-center lg:items-start lg:justify-around  bg-black3 rounded-2xl  px-4 py-8 lg:px-12  gap-4 lg:gap-2 h-full'>
							<h1 className='text-xl md:text-3xl    '>
								What’s
								<span className='hidden xl:inline'>
									included:
								</span>
							</h1>
							<h1 className='text-xl md:text-3xl xl:hidden '>
								included:
							</h1>
							<ul className='font-SFPro list-disc text-[.8rem] list-inside xl:text-[1rem]'>
								<li>
									Unlimited briefs (One request at a time)
								</li>
								<li>Unlimited brands</li>
								<li>Unlimited file request</li>
								<li>Easy payments</li>
								<li>Pause or cancel anytime.</li>
							</ul>
						</div>
					</div>
					<div className='hc1'>
						<div className='flex flex-col lg:flex-row  justify-center lg:items-start lg:justify-around  bg-black3 rounded-2xl items-center px-4 py-8 lg:px-12  gap-4 lg:gap-2 h-full'>
							<div className='flex flex-col  gap-4'>
								<h1 className='text-xl md:text-3xl'>
									Book a call
								</h1>
								<div className='flex flex-col gap-1 items-center md:block font-SFPro m1:text-[.6rem] text-[.6rem]   lg:text-[1rem] '>
									<span className=' block '>
										Learn more about how
									</span>
									<span className=''>
										{' '}
										DesignJockey works and how it
									</span>
									<span> can help you.</span>
								</div>
							</div>

							<Button
								text='Book a call'
								className='bg-black rounded-lg  text-sm text-center   py-6 px-6  w-6/12 '
								onClick={(e) => console.log(e)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

interface MembershipItemsProps {
	plan: string;
	price: string;
	content1?: string;
	content2: string;
	bt: string;
}

const MembershipItem = ({
	plan,
	price,
	content1,
	content2,
	bt,
}: MembershipItemsProps) => {
	return (
		<div className='flex flex-col justify-center lg:items-start lg:justify-around  bg-black3 rounded-2xl items-center px-4 py-8 lg:px-12  gap-4 lg:gap-2 h-full'>
			<h1 className='text-xl md:text-3xl'>{plan}</h1>
			<div className='flex flex-col gap-1 items-center md:block font-SFPro m1:text-[.6rem] text-[.6rem]   lg:text-[1rem] '>
				<span className=' block lg:inline'>
					{/* No minimum commitment. */}
					{content1}
				</span>
				{/* <span className=''>pause or cancel anytime.</span> */}
			</div>
			<div className='flex flex-col gap-1 items-center lg:items-start'>
				<h1 className='text-2xl md:text-3xl'>${price}/m</h1>
				<span className='font-SFPro m1:text-[.6rem] text-[.6rem]   lg:text-[.7rem] text-grey-light'>
					{content2}
				</span>
			</div>
			<Button
				text={bt}
				className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6  w-10/12 '
				onClick={(e) => console.log(e)}
			/>
		</div>
	);
};

// export default MembershipItems;
