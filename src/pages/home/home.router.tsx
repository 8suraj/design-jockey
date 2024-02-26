import ScrollCarousel from 'scroll-carousel-react';
import AVON from '../../assets/BW/AVON.png';
import DLF from '../../assets/BW/DLF.png';
import EMAAR from '../../assets/BW/EMAAR.png';
import KAIZEN from '../../assets/BW/KAIZEN.png';
import KORRAI from '../../assets/BW/KORRAI.png';
import LUPIN from '../../assets/BW/LUPIN.png';
import PEPSI from '../../assets/BW/PEPSI.png';
import TRUEVOGUE from '../../assets/BW/TRUEVOGUE.png';
import VANR from '../../assets/BW/VANR.png';
import Hero1 from '../../components/hero/hero1.component';
import Faq from '../../components/faq/faq.component';
import Hero2 from '../../components/hero/testimonials.component';
import MembershipBenefits from '../../components/membership/membershipBenefits.component';
import MembershipLevels from '../../components/membership/membershipLevels.component';
// import Bis from '../../components/b/b';
// import MembershipWorks from '../../components/membership/membershipworks.component';
import ww from '../../assets/ww.gif';
import Button from '../../components/button/button.component';
import w from '../../assets/product/w.png';
import q from '../../assets/product/q.png';
import e from '../../assets/product/e.png';
import ProductItem from '../../components/products/products.component';
import H1 from '../../components/header/header.component';
const img = [w, q, e];
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
					DLF,
					EMAAR,
					KAIZEN,
					KORRAI,
					LUPIN,
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
			<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto'>
				<img src={ww} className='w-full ' />
			</section>
			{/* <MembershipWorks /> */}
			<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
				<div className=' flex flex-col gap-5 px-6 md:px-14 py-12 xl:px-4'>
					<div className='flex w-full'>
						<div className='lg:w-7/12 m1:w-full'>
							{/* <h1 className='text-color-primary md:text-left text-center  capitalize text-2xl md:text-4xl lg:text-5xl pt-4 pr-28 m1:pr-0'>
							off the shelf
						</h1> */}
							<H1 text='Off-the-rack' />
						</div>
						<div className='lg:flex hidden w-5/12 h-fit justify-end '>
							<Button
								text='show all'
								className='bg-color-secondary btn_base '
								onClick={(e) => console.log(e)}
							/>
						</div>
					</div>

					<div className='flex flex-col lg:grid grid-cols-3 gap-4 py-24 items-center px-4'>
						{img?.map((e, i) => (
							<ProductItem image={e} index={i} />
						))}
					</div>

					<div className=' w-full flex justify-center lg:hidden'>
						<Button
							text='show all'
							className='bg-color-secondary btn_base w-full '
							onClick={(e) => console.log(e)}
						/>
					</div>
				</div>
			</section>
			<MembershipBenefits />
			<Hero2 />
			{/* <Bis /> */}
			<MembershipLevels />
			<Faq />
		</>
	);
}
