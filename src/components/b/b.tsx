import Button from '../button/button.component';
import H1 from '../header/header.component';
// import Slider from 'slider-moon';
import 'slider-moon/dist/style.css';
import './b.css';
const data = [
	'Stationary',
	'Emailers',
	'Print Ads',
	'Slide decks',
	'Social media banners',
	'Outdoors',
	'Google Ads',
	'Business cards',
	'Packaging',
	'Digital Ads',
	'Logo',
	'Blog Creative',
	'Posters',
	'Infographics',
	'Iconography',
];
const datas = [
	{
		header: 'Branding guidelines',
		content: 'Complete guidelines',
		price: 800,
	},
	{
		header: 'Website design',
		content: 'Upto 8 screens',
		price: 650,
	},
	{
		header: 'Mobile app design',
		content: 'Upto 8 screens',
		price: 650,
	},
	{
		header: 'Motion Graphics',
		content: '30 sec Video',
		price: 650,
	},
	{
		header: 'Pitch decks',
		content: '10 slides',
		price: 650,
	},
];
export default function Bis() {
	return (
		<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto flex flex-col gap-5  '>
			<div className='  flex flex-col gap-12 px-6 md:px-14 py-12 xl:px-4'>
				{/* <h1 className='text-color-primary md:text-left text-center capitalize text-4xl  m1:text-2xl'>
					Buy Individually or subscribe
				</h1> */}
				<div>
					<H1 text='Buy Individually or subscribe' />
					<p className='small_text header_perks'>
						choose a plan that’s right for you
					</p>
				</div>
				<div className='hidden lg:flex w-full m-auto  justify-center  gap-2 flex-row  '>
					{datas.map((e) => (
						<div className='bg-black3 rounded-lg text-[.7rem]    lg:w-[24%] xl:w-[19%]  1xl:w-[19.2%]    md:pt-6  pt-6 capitalize  h-[18rem] flex flex-col justify-between'>
							<div className='text-left  px-6  h-36'>
								<h1 className='lg:text-base	 xl:text-lg '>
									{e.header}
								</h1>
								<span className='small_text1 text-grey-light'>
									{e.content}
								</span>
							</div>
							<p className='text-left px-6 py-4 text-xl'>
								{`$${e.price}`}
							</p>
							<Button
								text='Add to cart'
								className='bg-color-secondary     min-h-[5rem]  w-full  '
								onClick={(e1) => console.log(e1)}
							/>
						</div>
					))}
				</div>
				{/* <div>
					<Slider
						slideClass={'my-scale'}
						infinite={true}
						bullets={false}
						arrowsNav={false}>
						<div className='slider my-scale w-screen overflow-hidden border'>
							<ul className='slider-wrapper '>
								{datas.map((e) => (
									<li
										key={e.header}
										className='bg-black3 rounded-lg text-[.7rem]    w-[90vw]   md:pt-6  pt-4 capitalize  h-[18rem] flex flex-col justify-between'>
										<div className='text-left p-4 h-32'>
											<h1 className='text-xl'>
												{e.header}
											</h1>
											<span className='font-SFPro text-grey-light'>
												{e.content}
											</span>
										</div>
										<p className='text-left p-4 text-xl'>
											{`$${e.price}`}
										</p>
										<Button
											text='Add to cart'
											className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6  '
											onClick={(e1) => console.log(e1)}
										/>
									</li>
								))}
							</ul>
						</div>
					</Slider>
				</div> */}
				<div className='w-full m-auto flex flex-col justify-center gap-2   sm:flex-row sm:flex-wrap'>
					{data.map((e) => (
						<div className='bg-black3 rounded-lg m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.93rem] lg:text-[1rem]  w-full  sm:w-[23.4%] md:w-[23.5%] lg:w-[24%] xl:w-[19%]  1xl:w-[19.2%]  sm:h-24 2xl:h-36 md:text-left sm:p-4 md:py-6 2xl:py-6 sm:text-left text-center py-4 capitalize '>
							<span className=''>{e}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
