import ScrollCarousel from 'scroll-carousel-react';
import s1 from './1.svg';
import s3 from './3.svg';
import s4 from './7.svg';
import Hero1 from '../../components/hero/hero1.component';
import { lazy, Suspense } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../../Frame_2_1.json';
const MembershipWorks = lazy(
	() =>
		import(
			'../../components/membership/membershipworks.component'
		)
);
const Products = lazy(
	() =>
		import('../../components/products/products.component')
);
const MembershipBenefits = lazy(
	() =>
		import(
			'../../components/membership/membershipBenefits.component'
		)
);
const Bis = lazy(() => import('../../components/b/b'));
const Hero2 = lazy(
	() =>
		import('../../components/hero/testimonials.component')
);

const MembershipLevels = lazy(
	() =>
		import(
			'../../components/membership/membershipLevels.component'
		)
);
const Faq = lazy(
	() => import('../../components/faq/faq.component')
);
const Footer = lazy(
	() => import('../../components/footer/footer.component')
);

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
					s1,
					s3,
					s4,
					s1,
					s3,
					s4,
					s1,
					s3,
					s4,
					s1,
					s3,
					s4,
					s1,
					s3,
					s4,
					s1,
					s3,
					s4,
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
			<Suspense
				fallback={
					<div className='w-[100vw] h-[100vh] flex items-center justify-center '>
						{' '}
						<div className=' w-[30vw] mx-auto'>
							<Player
								src={animation}
								className='player'
								loop
								autoplay
							/>
						</div>
					</div>
				}>
				<MembershipWorks />
				<Products />
				<MembershipBenefits />
				<Hero2 />
				<Bis />
				<MembershipLevels />
				<Faq />
				<Footer />
			</Suspense>
		</>
	);
}
