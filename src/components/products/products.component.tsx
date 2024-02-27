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
		<div className='rounded-xl overflow-hidden  h-[25rem] relative ccx cursor-pointer w-full '>
			<Link to={`${index}`} className='z-2'>
				<img src={image} alt='' className='object-cover	' />
			</Link>
			<div className='absolute z-2 bottom-0 ccvv rounded-xl left-0 right-0 '>
				<div className='bg-black2 backdrop-blur-xl rounded-xl'>
					<div className='lg:px-8 px-4 '>
						<div className='text-left    '>
							<h1 className='lg:text-base	 xl:text-lg pt-6 '>
								Branding guidelines
							</h1>
							<span className='small_text1 text-white'>
								Complete guidelines - 5 Days
							</span>
						</div>
						<p className='text-left  py-2 text-xl'>
							{`$800`}
						</p>
					</div>
					<div className=''>
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
