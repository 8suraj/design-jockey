import { useEffect } from 'react';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
// export default function Products() {
// 	return (
// 		<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
// 			<div className=' flex flex-col gap-5 px-6 md:px-14 py-12 xl:px-4'>
// 				<div className='flex w-full'>
// 					<div className='lg:w-7/12 m1:w-full'>
// 						{/* <h1 className='text-color-primary md:text-left text-center  capitalize text-2xl md:text-4xl lg:text-5xl pt-4 pr-28 m1:pr-0'>
// 							off the shelf
// 						</h1> */}
// 						<H1 text='Off-the-rack' />
// 					</div>
// 					<div className='lg:flex hidden w-5/12 h-fit justify-end '>
// 						<Button
// 							text='show all'
// 							className='bg-color-secondary btn_base '
// 							onClick={(e) => console.log(e)}
// 						/>
// 					</div>
// 				</div>
// 				<div className='flex flex-col gap-5 flex-wrap w-full sm:flex-row justify-center sm:gap-1 lg:gap-2 	'>
// 					<div className='hidden'>
// 						<div className='relative '>
// 							<img
// 								src={product}
// 								alt=''
// 								className='h-full w-full	object-contain'
// 							/>
// 							<Button
// 								text='add to cart'
// 								className='bg-transparent rounded-lg   text-center   py-2 px-2  w-[95%] absolute bottom-1 backdrop-blur-xl  text-[.7rem]'
// 								onClick={(e) => console.log(e)}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 				<div className=' w-full flex justify-center lg:hidden'>
// 					<Button
// 						text='show all'
// 						className='bg-color-secondary btn_base w-full '
// 						onClick={(e) => console.log(e)}
// 					/>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

interface ProductItemProps {
	image: string;
	index: number;
}

export default function ProductItem({
	image,
	index,
}: ProductItemProps) {
	useEffect(() => {
		const q = document.getElementsByClassName('ccx');
		if (q?.length > 0) {
			const p = document.getElementsByClassName('ccvv');
			for (const i of p) {
				(i as HTMLElement).style.width = `${
					(q[0] as HTMLElement).clientWidth
				}px`;
			}
		}
		// const w = document.getElementsByClassName('ccvv');
		// // const a = document.getElementsByClassName('cy');
		// (a[0] as HTMLElement).style.width = `${
		// 	(w[0] as HTMLElement).clientWidth
		// }px`;
	}, []);
	return (
		<div className='rounded-xl overflow-hidden  h-[25rem] relative ccx cursor-pointer'>
			<Link to={`${index}`} className='z-2'>
				<img src={image} alt='' className='object-cover	' />
			</Link>
			<div className='absolute z-2 bottom-0 ccvv rounded-xl '>
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
