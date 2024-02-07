import Faq from '../../components/faq/faq.component';
import Footer from '../../components/footer/footer.component';
import MembershipLevels from '../../components/membership/membershipLevels.component';
import MembershipBenefits from '../../components/membership/membershipBenefits.component';
import Bis from '../../components/b/b';
import Products from '../../components/products/products.component';
import Hero2 from '../../components/hero/testimonials.component';
import ScrollCarousel from 'scroll-carousel-react';
import MembershipWorks from '../../components/membership/membershipworks.component';
import s1 from './1.svg';
import s2 from './2.svg';
import s3 from './3.svg';
import s4 from './4.svg';
import s5 from './5.svg';
import s6 from './6.svg';
import s7 from './7.svg';
export default function Home() {
	return (
		<>
			<ScrollCarousel
				autoplay
				autoplaySpeed={8}
				speed={7}
				className='bg-[#c5c5c5] '
				onReady={() => {}}>
				{[
					s1,
					s2,
					s3,
					s4,
					s5,
					s6,
					s7,
					s1,
					s2,
					s3,
					s4,
					s5,
					s6,
					s7,
					s1,
					s2,
					s3,
					s4,
					s5,
					s6,
					s7,
				].map((item, index) => (
					<div
						key={index}
						className=' w-24 h-20 flex items-center  '>
						<img
							src={item}
							alt=''
							className='	aspect-[3/2] mix-blend-color-burn	w-24'
						/>
					</div>
				))}
			</ScrollCarousel>
			<MembershipWorks />
			<Products />
			<MembershipBenefits />
			<Hero2 />
			<Bis />
			<MembershipLevels />
			<Faq />
			<Footer />
		</>
	);
}
