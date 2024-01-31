import product from './product.png';
import Button from '../button/button.component';
export default function Products() {
	return (
		<section className='w-full '>
			<div className='w-10/12  m-auto flex flex-col gap-5 '>
				<div className='flex w-full'>
					<div className='lg:w-7/12 m1:w-full'>
						<h1 className='text-color-primary md:text-left text-center  capitalize text-2xl md:text-4xl lg:text-5xl pt-4 pr-28 m1:pr-0'>
							off the shelf
						</h1>
					</div>
					<div className='lg:flex hidden w-5/12 h-fit justify-end '>
						<Button
							text='show all'
							className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6 lg:w-5/12 xl:w-4/12 w-10/12 '
							onClick={(e) => console.log(e)}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-5 flex-wrap w-full sm:flex-row justify-center sm:gap-1 lg:gap-2 	'>
					<div></div>
					<div className='md:hidden'>
						<div className='relative '>
							<img src={product} alt='' />
							<Button
								text='add to cart'
								className='bg-transparent rounded-lg   text-center   py-2 px-2  w-[95%] absolute bottom-1 backdrop-blur-xl  text-[.7rem]'
								onClick={(e) => console.log(e)}
							/>
						</div>
					</div>
				</div>
				<div className=' w-full flex justify-center lg:hidden'>
					<Button
						text='show all'
						className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6 lg:w-5/12 xl:w-4/12 w-10/12 '
						onClick={(e) => console.log(e)}
					/>
				</div>
			</div>
		</section>
	);
}
