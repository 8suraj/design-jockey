/* eslint-disable no-mixed-spaces-and-tabs */
import './membership.css';
import Button from '../button/button.component.tsx';
import H1 from '../header/header.component.tsx';
import dot from './dot.svg';
const datas = [
	{
		plan: 'Starter',
		price: '833',
		facilities: [
			'Updating in every 48 Hrs',
			'1 pause per month',
			'No minimum commitment. ',
			'pause or cancel anytime.',
			'Source file ownership',
			'Dedicated designer',
		],

		tenure: 'Paid monthly',
		buyType: 'Buy now',
	},

	{
		plan: 'Core',
		price: '933',
		facilities: [
			'Updating in every 24 Hrs',
			'2 pause per month',
			'No minimum commitment. ',
			'pause or cancel anytime.',
			'Source file ownership',
			'Dedicated designer',
		],
		tenure: 'Paid quarterly',
		buyType: 'Buy now',
	},
	{
		plan: 'Growth',
		price: '1033',
		facilities: [
			'Updating in every 4 Hrs',
			'2 pause per month',
			'No minimum commitment. ',
			'pause or cancel anytime.',
			'Source file ownership',
			'Dedicated designer',
		],
		tenure: 'Paid yearly',
		buyType: 'Buy now',
	},
	// {
	// 	plan: 'Website Development',
	// 	price: '625',
	// 	facilities: [
	// 		'Get a better website faster with Website development.',
	// 	],
	// 	tenure: 'Requires subscription',
	// 	buyType: 'Add on',
	// },
	// {
	// 	plan: 'What’s included:',
	// 	price: '',
	// 	facilities: [
	// 'Unlimited briefs (One request at a time) ',
	// 'Unlimited brands',
	// 'Unlimited file request',
	// 'Easy payments',
	// 'Pause or cancel anytime.',
	// 	],
	// 	tenure: '',
	// 	buyType: '',
	// },
	// {
	// 	plan: 'Book a call',
	// 	price: '',
	// 	facilities: [
	// 		'Learn more about how DesignJockey works and how it can help you.',
	// 	],
	// 	tenure: '',
	// 	buyType: 'Book a call',
	// },
];

interface MembershipItemsProps {
	plan: string;
	price: string;
	facilities?: string[];
	tenure: string;
	buyType: string;
}

const MembershipItem1 = ({
	plan,
	price,
	facilities = [],
	tenure,
	buyType,
}: MembershipItemsProps) => {
	return (
		<div className='text-left flex flex-col justify-center   lg:justify-around bg-black3 rounded-2xl items-center p-4 pt-8  gap-4 lg:gap-2 lg:p-8 || w-full sm:w-[48%] md:w-[48%] min-h-[18rem] lg:items-start'>
			<div className='flex flex-col gap-4 lg:gap-2  '>
				<h1 className='text-xl md:text-3xl  '>{plan}</h1>

				<div className='small_text  font-SFPro  flex flex-col items-start '>
					<ul className='flex flex-col  gap-2 list-disc	list-inside '>
						{facilities?.length > 0
							? facilities?.map((e) => <li>{e}</li>)
							: ''}
					</ul>
				</div>
				<div className='flex flex-col gap-1 items-start lg:items-start'>
					{price ? (
						<h1 className='text-2xl md:text-3xl'>
							${price}/m
						</h1>
					) : (
						''
					)}
					{tenure ? (
						<span className='small_text text-grey-light pb-3'>
							{tenure}
						</span>
					) : (
						''
					)}
				</div>
			</div>
			{buyType ? (
				<Button
					text={buyType}
					className='bg-color-secondary btn_base w-full'
					onClick={(e) => console.log(e)}
				/>
			) : (
				''
			)}
		</div>
	);
};

const MembershipItem = ({
	plan,
	price,
	facilities = [],
	tenure,
	buyType,
}: MembershipItemsProps) => {
	return (
		<div className='flex flex-col justify-center lg:items-start lg:justify-around bg-black3 rounded-2xl items-center px-4 pt-8 pb-4 lg:px-12 gap-4 lg:gap-2 h-full w-full '>
			<h1 className='text-xl md:text-3xl text-center'>
				{plan}
			</h1>
			<div className='flex flex-col gap-1 items-center md:block font-SFPro m1:text-[.6rem] text-[.6rem] lg:text-[1rem]  '>
				<div className='small_text  xl:text-[1rem]  flex flex-col items-center'>
					{facilities?.length > 0
						? facilities?.map((e) => (
								<div
									key={e}
									className='flex items-center gap-2'>
									<span>
										<img src={dot} alt='' />
									</span>
									<span>{e}</span>
								</div>
						  ))
						: ''}
				</div>
			</div>
			<div className='flex flex-col gap-1 items-center lg:items-start'>
				{price ? (
					<h1 className='text-2xl md:text-3xl'>
						${price}/m
					</h1>
				) : (
					''
				)}
				{tenure ? (
					<span className='small_text text-grey-light pb-3'>
						{tenure}
					</span>
				) : (
					''
				)}
			</div>
			{buyType ? (
				<Button
					text={buyType}
					className='bg-color-secondary btn_base w-full'
					onClick={(e) => console.log(e)}
				/>
			) : (
				''
			)}
		</div>
	);
};

const MembershipLevels = () => {
	return (
		<>
			<div id='plans' className='py-16 ' />
			<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto'>
				<div className='m-auto flex flex-col gap-12 px-6 md:px-14 pb-12 xl:px-4'>
					<div>
						<H1 text='membership levels' />

						<p className='small_text header_perks pt-2'>
							choose a plan that’s right for you
						</p>
					</div>
					<div className='flex  flex-wrap w-full gap-2 justify-center cx'>
						{datas.map((data: MembershipItemsProps) => (
							<MembershipItem1 {...data} />
						))}
						<div className='flex flex-col justify-between lg:items-start lg:p-8 lg:justify-between bg-black3 rounded-2xl items-center p-4 pt-8 gap-4 lg:gap-2 || w-full sm:w-[48%] md:w-[48%] min-h-[18rem]'>
							<div className='flex flex-col justify-center lg:items-start  lg:justify-between bg-black3 rounded-2xl items-center  gap-4 lg:gap-2 || w-full'>
								<h1 className='text-xl md:text-3xl text-center lg:text-left'>
									Website Development
								</h1>
								<div className='flex flex-col gap-1 items-center md:block font-SFPro m1:text-[.6rem] text-[.6rem] lg:text-[1rem]  text-center lg:items-start'>
									<div className='small_text  xl:text-[1rem]  flex flex-col items-center lg:text-left'>
										Get a better website faster with Website
										development.
									</div>
								</div>
								<div className='flex flex-col gap-1 items-center lg:items-start  '>
									<h1 className='text-2xl md:text-3xl'>
										$625/m
									</h1>

									<span className='small_text text-grey-light pb-3 '>
										Requires subscription
									</span>
								</div>
							</div>

							<Button
								text='Add on'
								className='bg-color-secondary btn_base w-full'
								onClick={(e) => console.log(e)}
							/>
						</div>
						<div className='text-left flex flex-col justify-center   lg:justify-around bg-black3 rounded-2xl items-center lg:items-start p-4 py-8  gap-4 lg:gap-2 lg:p-8 || w-full sm:w-[48%] md:w-[48%] h-fit lg:min-h-[20rem]'>
							<div className='flex flex-col gap-4 lg:gap-2  items-start '>
								<h1 className='text-xl md:text-3xl '>
									What’s <br /> included:
								</h1>

								<div className='small_text  font-SFPro  flex flex-col items-start pl-4  '>
									<ul className='flex flex-col  gap-2 list-disc	list-outside '>
										<li>
											Unlimited briefs <br /> (One request
											at a time)
										</li>
										{[
											'Unlimited brands',
											'Unlimited file request',
											'Easy payments',
											'Pause or cancel anytime.',
										].map((e) => (
											<li>{e}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className='flex flex-col justify-center lg:items-start lg:justify-between bg-black3 rounded-2xl items-center lg:p-8  p-4 pt-8  gap-4 lg:gap-2 || w-full sm:w-[48%] md:w-[48%] h-fit lg:min-h-[20rem]'>
							<div className='flex flex-col justify-center lg:items-start lg:justify-between bg-black3 rounded-2xl items-center  gap-4 lg:gap-2 || w-full '>
								<h1 className='text-xl md:text-3xl text-center lg:text-left'>
									Book a call
								</h1>
								<div className='flex flex-col gap-1 items-center md:block font-SFPro m1:text-[.6rem] text-[.6rem] lg:text-[1rem]  text-center lg:text-left'>
									<div className='small_text  xl:text-[1rem]  flex flex-col items-center lg:items-start'>
										Learn more about how DesignJockey works
										and how it can help you.
									</div>
								</div>
							</div>

							<Button
								text='book a call'
								className='bg-black btn_base w-full'
								onClick={(e) => console.log(e)}
							/>
						</div>
					</div>

					<div className=' flex-col ctnr gap-3  '>
						{datas.map((data, index) => (
							<div key={index} className={`m${index + 1}`}>
								<MembershipItem {...data} />
							</div>
						))}

						<div className='m4 '>
							<div className='flex flex-col  xl:flex-row justify-center items-center lg:items-start xl:items-center lg:justify-around  bg-black3 rounded-2xl  px-4 py-12 lg:px-12  gap-4 lg:gap-8 h-full '>
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
									<div className='flex flex-col gap-1 items-center    '>
										<span className=' block text-center small_text'>
											Get a better website faster with
											Website development.
										</span>
									</div>
								</div>
								<div className='flex flex-col gap-1 items-center md:items-start'>
									<h1 className='text-2xl lg:text-3xl'>
										$625/m
									</h1>
									<span className='small_text text-grey-light'>
										Requires subscription
									</span>
								</div>
								<Button
									text='Add on'
									className='bg-color-secondary btn_base lg:w-[39%] w-full '
									onClick={(e) => console.log(e)}
								/>
							</div>
						</div>
						<div className='m5'>
							<div className='flex flex-col justify-center items-center lg:items-start lg:justify-around  bg-black3 rounded-2xl  px-4 py-8 lg:px-12  gap-4 lg:gap-2 h-full'>
								<h1 className='text-xl md:text-3xl m1:text-center lg:text-start  '>
									What’s included:
								</h1>
								<div className='small_text  xl:text-[1rem] border '>
									<div className='flex items-center gap-2'>
										<span>
											<img src={dot} alt='' />
										</span>
										<span>
											Unlimited briefs (One request at a
											time)
										</span>
									</div>
									<div className='flex items-center gap-2'>
										<span>
											<img src={dot} alt='' />
										</span>
										<span>Unlimited brands</span>
									</div>
									<div className='flex items-center gap-2'>
										<span>
											<img src={dot} alt='' />
										</span>
										<span>Unlimited file request</span>
									</div>
									<div className='flex items-center gap-2'>
										<span>
											<img src={dot} alt='' />
										</span>
										<span>Easy payments</span>
									</div>
									<div className='flex items-center gap-2'>
										<span>
											<img src={dot} alt='' />
										</span>
										<span>Pause or cancel anytime.</span>
									</div>
								</div>
							</div>
						</div>
						<div className='m6'>
							<div className='w-full flex flex-col lg:flex-row  justify-center lg:items-start lg:justify-between  bg-black3 rounded-2xl items-center px-12 py-12   h-full'>
								<div className='flex flex-col  gap-4    '>
									<h1 className='text-xl md:text-3xl m1:text-center lg:text-start'>
										Book a call
									</h1>
									<div className='flex flex-col gap-1 items-center md:block small_text '>
										<span className=' block m1:text-center lg:text-start '>
											Learn more about how DesignJockey
											works and how it can help you.
										</span>
									</div>
								</div>

								<div className=''>
									<Button
										text='Book a call'
										className='bg-black btn_base  w-[17rem]'
										onClick={(e) => console.log(e)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MembershipLevels;

// export default MembershipItems;
