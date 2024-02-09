import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import m1 from '../../assets/svgs/membershipworks/m1.svg';
import m2 from '../../assets/svgs/membershipworks/m2.svg';
import m3 from '../../assets/svgs/membershipworks/m3.svg';
import Button from '../button/button.component';
import H1 from '../header/header.component';

const data = [
	{
		imgae: m1,
		content:
			'Signup and subscribe to a plan and get an unlimited request access',
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
		<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
			<div className='m-auto flex flex-col gap-12  md:px-14 py-12 xl:px-4'>
				<div className='flex w-full px-6'>
					<div className='lg:w-7/12 m1:w-full'>
						<H1 text='how membership works' />
						<h4 className='small_text header_perks pt-4'>
							Perks so good you'll never need to go anywhere
							else for your design. Seriously.
						</h4>
					</div>
					<div className='lg:flex hidden w-5/12 h-fit justify-end'>
						<Button
							text='See Plans'
							className='bg-color-secondary btn_base'
							onClick={(e) => console.log(e)}
						/>
					</div>
				</div>
				<div className='sm:flex flex-col gap-5 flex-wrap w-full sm:flex-row justify-center sm:gap-1 lg:gap-2 	hidden'>
					{data.map((e) => (
						<div className='flex flex-col  gap-2   w-full sm:w-[49%] md:w-[49%]  lg:w-[32.5%]'>
							<div className='rounded-full bg-color-primary flex items-center justify-center h-28 m1:h-24 p-4 lg:h-[7.5rem] xl:h-[8.5rem] lg:p-6  '>
								<img
									src={e.imgae}
									alt=''
									className='h-full  '
								/>
							</div>

							<p className='text-center small_text1 m1:px-0 lg:px-12 2xl:px-16 py-2'>
								{e.content}
							</p>
						</div>
					))}
				</div>
				<div className='sm:hidden block  w-[100vw]  '>
					<Slider {...settings}>
						{data.map((e, index) => (
							<div
								key={index}
								className='flex flex-col gap-2 h-[50vh]   px-1'>
								<div className='rounded-full bg-color-primary flex items-center justify-center h-16 m1:h-20 p-4 lg:h-[7.5rem] xl:h-[8.5rem] lg:p-6'>
									<img
										src={e.imgae}
										alt=''
										className='h-full '
									/>
								</div>
								<p className='text-center small_text1 m1:px-0 lg:px-12 2xl:px-16 py-2'>
									{e.content}
								</p>
							</div>
						))}
					</Slider>
				</div>
				<div className='w-full flex justify-center lg:hidden'>
					<Button
						text='Add on'
						className='bg-color-secondary btn_base'
						onClick={(e) => console.log(e)}
					/>
				</div>
			</div>
		</section>
	);
}
