import { useState } from 'react';
import { PuffLoader } from 'react-spinners';
import social from '../../assets/product/social.png';
import web from '../../assets/product/web.png';
import branding from '../../assets/product/y.png';
import store from '../../assets/product/store.png';
import ProductItem from '../../components/products/products.component.tsx';

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
export default function Store() {
	const [isLoaded, setIsLoaded] = useState(true);
	const handleImageLoaded = () => {
		setIsLoaded(true);
	};

	return (
		<>
			<div className=' hero1 h-[100vh]  w-full '>
				<img
					src={store}
					alt=''
					onLoad={handleImageLoaded}
					className={`${
						isLoaded ? 'OP1' : 'hidden'
					} w-full h-full object-cover`}
				/>

				<div
					className={`${
						isLoaded ? 'OP2 hidden ' : ''
					} w-full h-full flex items-center justify-center absolute left-0 top-0  `}>
					<PuffLoader color='#C4FE01' />
				</div>
			</div>
			<div className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
				<div className='flex flex-col lg:grid grid-cols-3 gap-4 py-24 items-center lg:px-4  '>
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
		</>
	);
}
