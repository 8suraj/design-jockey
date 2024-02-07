import Faq from '../../components/faq/faq.component';
import Footer from '../../components/footer/footer.component';
import MembershipLevels from '../../components/membership/membershipLevels.component';
import MembershipBenefits from '../../components/membership/membershipBenefits.component';
import Bis from '../../components/b/b';
import Products from '../../components/products/products.component';
import Hero2 from '../../components/hero/testimonials.component';
import ScrollCarousel from 'scroll-carousel-react';
import MembershipWorks from '../../components/membership/membershipworks.component';

export default function Home() {
	return (
		<>
			<ScrollCarousel
				autoplay
				autoplaySpeed={8}
				speed={7}
				onReady={() => {}}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
					<div
						key={item}
						className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
						{item}
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
