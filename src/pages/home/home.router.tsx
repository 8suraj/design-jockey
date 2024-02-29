import ScrollCarousel from 'scroll-carousel-react';
import AVON from '../../assets/BW/AVON.png';
import EMAAR from '../../assets/BW/EMAAR.png';
import KAIZEN from '../../assets/BW/KAIZEN.png';
import KORRAI from '../../assets/BW/KORRAI.png';
import PEPSI from '../../assets/BW/PEPSI.png';
import TRUEVOGUE from '../../assets/BW/TRUEVOGUE.png';
import VANR from '../../assets/BW/VANR.png';
import Hero1 from '../../components/hero/hero1.component';
import Faq from '../../components/faq/faq.component';
import Hero2 from '../../components/hero/testimonials.component';
import MembershipBenefits from '../../components/membership/membershipBenefits.component';
import MembershipLevels from '../../components/membership/membershipLevels.component';

import MembershipWorks from '../../components/membership/membershipworks.component';
import ww from '../../assets/ww.gif';
import Button from '../../components/button/button.component';

import a from '../../assets/product/a.png';
import ProductItem from '../../components/products/products.component';
import H1 from '../../components/header/header.component';
import { Link } from 'react-router-dom';
import CreativeServices from '../../components/creativeServices/creativeServices';
const img = [a, a, a];
export default function Home() {
	return (
		<>
			<Hero1 />
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
						{img?.map((e, i) => (
							<ProductItem image={e} index={i} />
						))}
					</div>
					<div className='w-full max-w-xl lg:hidden  block  '>
						<div className='flex flex-row  gap-4 overflow-x-scroll snap-x snap-mandatory cc px-[13%] lg:px-0'>
							{img?.map((e, i) => (
								<ProductItem image={e} index={i} />
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

			{/* </div> */}

			<MembershipBenefits />
			<Hero2 />
			<CreativeServices />
			<MembershipLevels />
			<Faq />
		</>
	);
}
