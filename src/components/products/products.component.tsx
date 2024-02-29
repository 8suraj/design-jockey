import Button from '../button/button.component';
import { Link } from 'react-router-dom';

interface ProductItemProps {
	image: string;
	index: number;
}

export default function ProductItem({
	image,
	index,
}: ProductItemProps) {
	return (
		<div className='rounded-xl overflow-hidden  h-[23rem] m2:h-[24.5rem] m3:h-[26rem] sm:h-[26rem] md:h-[26rem] lg:h-[28rem] relative ccx cursor-pointer   flex-shrink-0  w-[90%] sm:w-[65%] md:w-full '>
			<Link to={`products/${index}`} className='z-2'>
				<img
					src={image}
					alt=''
					className='object-fill	w-full h-full'
				/>
			</Link>
			<div className='absolute z-2 bottom-0 ccvv rounded-xl left-0 right-0 '>
				<div className='bg-black2 backdrop-blur-xl rounded-xl'>
					<div className='lg:px-8 px-4 sm:px-6 py-3'>
						<div className='text-left flex  items-center justify-between pt-3 '>
							<h1 className='lg:text-base	 xl:text-lg '>
								Branding
							</h1>
							<p className=''>{`$800`}</p>
						</div>
						<span className='small_text1 text-white pb-6 block'>
							See More
						</span>
					</div>
					<div className='px-4 pb-4 sm:px-6 sm:pb-6'>
						<Button
							text='Buy now'
							className='bg-color-secondary btn_base   w-full  '
							onClick={(e) => console.log(e)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
