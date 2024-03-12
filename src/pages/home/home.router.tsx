import ScrollCarousel from 'scroll-carousel-react';
import AVON from '../../assets/BW/AVON.png';
import EMAAR from '../../assets/BW/EMAAR.png';
import KAIZEN from '../../assets/BW/KAIZEN.png';
import KORRAI from '../../assets/BW/KORRAI.png';
import PEPSI from '../../assets/BW/PEPSI.png';
import TRUEVOGUE from '../../assets/BW/TRUEVOGUE.png';
import VANR from '../../assets/BW/VANR.png';
import Faq from '../../components/faq/faq.component';
import Hero2 from '../../components/hero/testimonials.component';
import MembershipBenefits from '../../components/membership/membershipBenefits.component';
import MembershipLevels from '../../components/membership/membershipLevels.component';

import MembershipWorks from '../../components/membership/membershipworks.component';
import ww from '../../assets/ww.gif';
import Button from '../../components/button/button.component';

import social from '../../assets/product/social.png';
import web from '../../assets/product/web.png';
import branding from '../../assets/product/y.png';
import ProductItem from '../../components/productItem/productItem.component';
import H1 from '../../components/header/header.component';
import { Link } from 'react-router-dom';
import CreativeServices from '../../components/creativeServices/creativeServices';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/svgs/logo.svg';
import cross from '../../assets/svgs/cross.svg';
import humburger from '../../assets/svgs/humburger.svg';
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { PuffLoader } from 'react-spinners';
const data = [
	{
		header: 'Branding guidlines',
		image: branding,
		product: 'branding',
	},
	{
		header: 'Website design',
		image: web,
		product: 'web-design',
	},
	{
		header: 'Motion Graphics',
		image: social,
		product: 'motion-graphics',
	},
];
export default function Home() {
	const [clicked, setClicked] = useState<boolean>(false);
	const [mobileMenu, setMobileMenu] =
		useState<boolean>(false);
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 1);
	}, [clicked]);
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageLoaded = () => {
		setIsLoaded(true);
	};
	return (
		<>
			<>
				<div className=' hero1 h-[100vh]  w-full relative '>
					<div className='absolute left-0 top-0 bottom-0 right-0   '>
						<Spline
							scene='https://prod.spline.design/vEByxlHa0a4Jvxsi/scene.splinecode'
							onLoad={handleImageLoaded}
							className={`${
								isLoaded ? 'OP1' : 'hidden'
							} absolute left-0 top-0  bottom-0 right-0`}
						/>
					</div>
					<div
						className={`${
							isLoaded ? 'OP2 hidden ' : ''
						} w-full h-full flex items-center justify-center absolute left-0 top-0  `}>
						<PuffLoader color='#C4FE01' />
					</div>
					{isLoaded ? (
						<section className='centerrr1  xl:w-[80vw] 2xl:w-[80vw] px-6 md:px-14  xl:px-4 w-full   mx-auto     flex  justify-center absolute  -translate-x-1/2   left-[50%] top-[25%] m3:top-[25%] lg:top-[50%] lg:-translate-y-1/2 '>
							<div className=' w-full bg-black2 backdrop-blur-xl rounded-xl p-6 h-full gap-12 flex flex-col  items-center || md:gap-4 md:p-6   md:justify-between md:items-start md:min-h-[18rem] 	'>
								<div className='flex justify-between text-[.64rem] font-SFPro w-full  md:hidden'>
									<span className='text-[.6rem]'>
										Delhi, <br /> India
										<span id='MyClockDisplay'></span>
									</span>
									<span className='text-[.6rem]'>
										+91 872 396 3206 <br />
										dhruba@designjockey.in
									</span>
								</div>
								<div className='text-center flex flex-col  w-full gap-4 md:hidden  '>
									<H1 text='One Subscription, Limitless Designs' />
									<p className='small_text md:hidden'>
										Get all your design requirements covered
										with one flat subscription
									</p>
									<HashLink smooth to={'/#plans'}>
										<Button
											text='Book a call'
											className='bg-color-secondary btn_base  md:hidden w-full mt-4  '
											onClick={() =>
												window.open(
													'https://calendly.com/info-designjockey/45min'
												)
											}
										/>
									</HashLink>
								</div>
								<div className='hidden || w-full md:flex md:flex-row md:justify-between md:items-start '>
									<div className='text-center flex flex-col  	w-[69%] 	'>
										<H1 text='One Subscription, Limitless Designs' />
									</div>
									<HashLink smooth to={'/#plans'}>
										<Button
											text='Book a call'
											className='btn_base bg-color-secondary  '
											onClick={() =>
												window.open(
													'https://calendly.com/info-designjockey/45min'
												)
											}
										/>
									</HashLink>
								</div>
								<div className='hidden || text-[.64rem] font-SFPro  w-full md:flex justify-between '>
									<p className='small_text  font-SFPro '>
										Get all your design requirements covered
										with one flat subscription
									</p>
									<span className='small_text1 '>
										Delhi, <br /> India{' '}
										{new Date().toLocaleTimeString(
											'en-US',
											{
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
											}
										)}
										{/* <span id='MyClockDisplay'></span> */}
									</span>
									<span className='small_text1'>
										+91 872 396 3206 <br />
										dhruba@designjockey.in
									</span>
								</div>
							</div>
						</section>
					) : (
						''
					)}
				</div>

				{isLoaded ? (
					<div className=' fixed left-[50%] top-[.4rem] centerrr1  xl:w-[80vw] 2xl:w-[80vw]  z-[100] px-6 md:px-14  xl:px-4 w-full  '>
						<nav className='w-full mt-8   p-4 px-6 lg:p-0 flex items-center rounded-xl     bg-black2 backdrop-blur-xl    '>
							<div className='flex w-full  justify-between items-center '>
								<Link
									className='h-full  lg:pl-4'
									to='/'
									onClick={() => {
										setClicked(!clicked);
									}}>
									<img
										src={logo}
										alt='logo'
										className='w-8 md:w-10 '
									/>
								</Link>
								<ul className=' text-color-primary items-center gap-4 m1:text-[.65rem] text-[.65rem]   md:text-[.75rem] hidden lg:flex'>
									<Link
										to='/store'
										onClick={() => {
											setClicked(!clicked);
										}}>
										store
									</Link>
									<Link
										to='/work'
										onClick={() => {
											setClicked(!clicked);
										}}>
										work
									</Link>
									<HashLink smooth to={'/#services'}>
										services
									</HashLink>
									<HashLink smooth to={'/#plans'}>
										plans
									</HashLink>
									<Link
										to='/cart'
										onClick={() => {
											setClicked(!clicked);
										}}>
										cart
									</Link>
								</ul>
								<div
									className='lg:hidden '
									onClick={() =>
										setMobileMenu(!mobileMenu)
									}>
									{!mobileMenu ? (
										<img src={humburger} alt='logo' />
									) : (
										<img src={cross} alt='logo' />
									)}
								</div>
								<Button
									text='login'
									className='btn_base  bg-black4  hidden lg:block '
									onClick={() => {}}
								/>
							</div>
						</nav>

						{mobileMenu ? (
							<div className='  z-[100]  pt-6  lg:hidden '>
								<div className='bg-black2 backdrop-blur-xl w-full  rounded-xl '>
									<ul className=' text-color-primary   flex flex-col '>
										<Link
											to='/store'
											className=' p-4  pt-8 m2:py-6 m2:pt-12 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
											onClick={() => {
												setClicked(!clicked);
												setMobileMenu(false);
											}}>
											store
										</Link>
										<Link
											to='/work'
											className='p-4 py-5  m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
											onClick={() => {
												setClicked(!clicked);
												setMobileMenu(false);
											}}>
											work
										</Link>
										<HashLink
											smooth
											className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
											to={'/#services'}
											onClick={() => setMobileMenu(false)}>
											services
										</HashLink>
										<HashLink
											smooth
											className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
											to={'/#plans'}
											onClick={() => setMobileMenu(false)}>
											plans
										</HashLink>
										<Link
											className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
											to='/cart'
											onClick={() => {
												setClicked(!clicked);
												setMobileMenu(false);
											}}>
											cart
										</Link>
										<div className=' pt-5 m2:pt-6 w-full p-4'>
											<button
												className='w-full btn_base  rounded-lg capitalize bg-black4  text-white  '
												onClick={(e) => {
													console.log(e);
													setMobileMenu(false);
												}}>
												login
											</button>
										</div>
									</ul>
								</div>
							</div>
						) : (
							''
						)}
					</div>
				) : (
					''
				)}
			</>
			<ScrollCarousel
				autoplay
				autoplaySpeed={8}
				speed={7}
				className='bg-[#c5c5c5] '
				margin={100}
				onReady={() => {}}>
				{[
					AVON,
					EMAAR,
					KAIZEN,
					KORRAI,
					PEPSI,
					TRUEVOGUE,
					VANR,
				].map((item, index) => (
					<div
						key={index}
						className=' w-24 h-20 flex items-center  '>
						<img src={item} alt='' className='	w-24' />
					</div>
				))}
			</ScrollCarousel>
			<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto xl:px-4  '>
				<img src={ww} className='w-full ' />
			</section>
			<MembershipWorks />
			<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto  '>
				<div className=' flex flex-col gap-12  md:px-14  xl:px-4  py-[3rem] md:py-10 md:pb-10 '>
					<div className='flex w-full '>
						<div className='lg:w-7/12 m1:w-full '>
							<H1 text='Off-the-rack' />
						</div>
						<Link
							className='lg:flex hidden w-5/12 h-fit justify-end '
							to='/products'>
							<Button
								text='show all'
								className='bg-color-secondary btn_base '
								onClick={() => {}}
							/>
						</Link>
					</div>
					<div className=' flex-col lg:grid grid-cols-3 gap-4  items-center hidden '>
						{data?.map((e, i) => (
							<ProductItem
								image={e.image}
								index={i}
								header={e.header}
								product={e.product}
							/>
						))}
					</div>
					<div className='w-full max-w-xl lg:hidden  block  '>
						<div className='flex flex-row  gap-4 overflow-x-scroll snap-x snap-mandatory cc px-[13%] lg:px-0'>
							{data?.map((e, i) => (
								<ProductItem
									image={e.image}
									index={i}
									header={e.header}
									product={e.product}
								/>
							))}
						</div>
					</div>
					<Link
						className='  flex justify-center lg:hidden'
						to='/products'>
						<Button
							text='show all'
							className='bg-color-secondary btn_base w-full mx-12 sm:w-[65vw] '
							onClick={() => {}}
						/>
					</Link>
				</div>
			</section>
			<MembershipBenefits />
			<Hero2 />
			<CreativeServices />
			<MembershipLevels />
			<Faq />
		</>
	);
}
