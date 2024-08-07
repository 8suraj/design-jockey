import Button from '../button/button.component';
import { Link } from 'react-router-dom';

interface ProductItemProps {
	image: string;
	index: number;
	header: string;
	product: string;
}

export default function ProductItem({
	image,
	index,
	header,
	product,
}: ProductItemProps) {
	return (
		<div className='rounded-xl overflow-hidden  h-[18rem] m2:h-[19rem] m3:h-[20rem] sm:h-[21rem] md:h-[23rem] lg:h-[24rem] relative ccx cursor-pointer flex-shrink-0     sm:w-[65%] md:w-full w-[75vw] '>
			<Link to={`/store/${product}`} className='z-2'>
				<img
					src={image}
					alt=''
					className='object-cover  	 '
				/>
			</Link>
			<div className='absolute z-2 bottom-0 ccvv rounded-xl left-0 right-0 '>
				<div className='bg-black2 backdrop-blur-xl rounded-xl  '>
					<Link to={`/store/${index}`} className='z-2'>
						<div className='lg:px-6 px-3 sm:px-3 lg:pt-5 p-3  '>
							<div className='text-left flex  items-start justify-between  '>
								<h1 className='lg:text-base	 xl:text-lg  w-[50%]'>
									{header}
								</h1>
								<p className=''>{`$800`}</p>
							</div>
						</div>
					</Link>
					<div className='px-3 pb-3 sm:px-3 sm:pb-3 lg:px-6 lg:pb-6'>
						<Button
							text='Buy now'
							className='bg-color-secondary btn_base   w-full  '
							onClick={() => {}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
