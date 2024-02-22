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
// import Bis from '../../components/b/b';
import Faq from '../../components/faq/faq.component';
import Footer from '../../components/footer/footer.component';
import Hero2 from '../../components/hero/testimonials.component';
import MembershipBenefits from '../../components/membership/membershipBenefits.component';
import MembershipLevels from '../../components/membership/membershipLevels.component';
// import MembershipWorks from '../../components/membership/membershipworks.component';
import Products from '../../components/products/products.component';

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
			{/* <MembershipWorks /> */}
			<Products />
			<MembershipBenefits />
			<Hero2 />
			{/* <Bis /> */}
			<MembershipLevels />
			<Faq />
			<Footer />
		</>
	);
}
