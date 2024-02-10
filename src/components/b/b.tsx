import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slider-moon/dist/style.css';
import Button from '../button/button.component';
import H1 from '../header/header.component';
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
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<>
			<div id='services' className='py-16 ' />

			<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto flex flex-col gap-5 '>
				<div className='  flex flex-col gap-6 md:gap-2 '>
					<div className='flex w-full px-6 md:px-14  xl:px-4'>
						<div className='lg:w-7/12 m1:w-full'>
							<H1 text='Buy Individually or subscribe' />
							<p className='small_text header_perks pt-4'>
								choose a plan that’s right for you
							</p>
						</div>
						<div className='lg:flex hidden w-5/12 h-fit justify-end '>
							<Button
								text='See Plans'
								className='bg-color-secondary btn_base '
								onClick={(e) => console.log(e)}
							/>
						</div>
					</div>
					<div className='hidden xl:flex w-full m-auto  justify-center  gap-2 flex-row px-6 md:px-14 py-12 xl:px-4 '>
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
					<div className='sm:block xl:hidden hidden  w-[100vw]  '>
						<Slider
							{...{
								className: 'center',
								centerMode: true,
								infinite: true,
								speed: 500,
								slidesToShow: 3,
								slidesToScroll: 1,
								arrows: false,
							}}>
							{datas.map((e) => (
								<div className='px-1'>
									<div className='bg-black3 rounded-lg text-[.7rem]       md:pt-6  pt-6 capitalize  h-[17rem] flex flex-col justify-between'>
										<div className='text-left  px-6  h-32 '>
											<h1 className='lg:text-base	 xl:text-lg '>
												{e.header}
											</h1>
											<span className='small_text1 text-grey-light'>
												{e.content}
											</span>
										</div>
										<p className='text-left px-6  text-xl '>
											{`$${e.price}`}
										</p>
										<Button
											text='Add to cart'
											className='bg-color-secondary     min-h-[5rem]  w-full  '
											onClick={(e1) => console.log(e1)}
										/>
									</div>
								</div>
							))}
						</Slider>
					</div>
					<div className='sm:hidden block  w-[100vw]  '>
						<Slider {...settings}>
							{datas.map((e) => (
								<div className='px-1'>
									<div className='bg-black3 rounded-lg text-[.7rem]       md:pt-6  pt-6 capitalize  h-[17rem] flex flex-col justify-between'>
										<div className='text-left  px-6  h-32 '>
											<h1 className='lg:text-base	 xl:text-lg '>
												{e.header}
											</h1>
											<span className='small_text1 text-grey-light'>
												{e.content}
											</span>
										</div>
										<p className='text-left px-6  text-xl '>
											{`$${e.price}`}
										</p>
										<Button
											text='Add to cart'
											className='bg-color-secondary     min-h-[5rem]  w-full  '
											onClick={(e1) => console.log(e1)}
										/>
									</div>
								</div>
							))}
						</Slider>
					</div>
					<div className='w-full m-auto flex flex-col justify-center gap-2   sm:flex-row sm:flex-wrap px-6 md:px-14 py-12 xl:px-4'>
						{data.map((e) => (
							<div className='bg-black3 rounded-lg m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.93rem] lg:text-[.9rem] text-wrap	 w-full  sm:w-[30%] md:w-[25%] lg:w-[24%] xl:w-[19%]  1xl:w-[19.2%]  sm:h-24 2xl:h-36 md:text-left sm:p-6 md:py-6 2xl:py-6 sm:text-left text-center py-6 capitalize '>
								<span className='text-wrap	'>{e}</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
