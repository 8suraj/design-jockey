import { FunctionComponent, useState } from 'react';
import minus from './minus.svg';
import plus from './plus.svg';
import Button from '../../components/button/button.component';
import Footer from '../../components/footer/footer.component';
export default function Cart() {
	return (
		<>
			<div className='w-full bg-black-light pt-[10rem]'>
				<section className='xl:w-[80vw] 2xl:w-[80vw] h-screen mx-auto  '>
					<div className='px-6 md:px-14 py-12 xl:px-4'>
						<div className='flex flex-col gap-32 w-full '>
							<div className='flex w-full justify-center py-4 flex-col items-center'>
								<div className='md:flex m1:hidden justify-between w-full m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.93rem] lg:text-[1rem]  px-4 py-2'>
									<div className='w-6/12'>Product</div>
									<div className='md:w-2/12'>Price</div>
									<div className='md:w-2/12'>Quantity</div>
									<div className='md:w-2/12 text-right'>
										Subtotal
									</div>
								</div>
								<ProductItem />
							</div>
							<div className='flex flex-col gap-6 md:w-6/12 w-11/12 mx-auto items-center m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.93rem] lg:text-[1rem]'>
								<h1 className='text-color-primary capitalize'>
									Cart totals
								</h1>
								<div className='w-full text-sm flex justify-between'>
									<span>Total</span>
									<span>$400</span>
								</div>
								<div className='flex w-full gap-2'>
									<input
										type='text'
										className='w-8/12 rounded placeholder:text-[.7rem] placeholder:text-center h-14 placeholder:text-grey-light bg-black4 outline-none text-center text-[.7rem] text-grey-light'
										placeholder='coupon code '
									/>
									<div className=' w-4/12 flex justify-center '>
										<Button
											text='apply'
											className='bg-black rounded-lg w-full h-14 capitalize  text-[.7rem]'
											onClick={(e) => console.log(e)}
										/>
									</div>
								</div>
								<div className=' w-full flex justify-center '>
									<Button
										text='buy'
										className='bg-color-secondary rounded-lg  text-sm text-center   py-6 px-6 w-full '
										onClick={(e) => console.log(e)}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

interface ProductItemProps {}

const ProductItem: FunctionComponent<
	ProductItemProps
> = () => {
	const [count, setCount] = useState(0);
	return (
		<div className='bg-black rounded-lg w-full p-4 flex m1:flex-col gap-6 md:flex-row  '>
			<h1 className='text-color-primary md:hidden '>
				Branding
			</h1>
			<div className='flex justify-between items-center md:w-full '>
				<h1 className='text-color-primary md:block m1:hidden md:w-6/12'>
					Branding guidelines
				</h1>
				<h3 className='w-2/12'>{`$800`}</h3>
				<div className='flex    items-center justify-between  md:w-2/12 '>
					<div
						className='rounded-full lg:rounded-lg lg:w-8 lg:h-8 bg-black4 flex items-center justify-center w-6 h-6 cursor-pointer '
						onClick={() =>
							setCount((prev) => (prev > 0 ? prev - 1 : 0))
						}>
						<img
							src={minus}
							alt=''
							className='w-3 lg:w-4'
						/>
					</div>
					<div className='px-2 text-lg'>{count}</div>
					<div
						className='rounded-full lg:rounded-lg lg:w-8 lg:h-8 bg-black4 flex items-center justify-center w-6 h-6 cursor-pointer '
						onClick={() => setCount((prev) => prev + 1)}>
						<img src={plus} alt='' className='w-3' />
					</div>
				</div>
				<div className='m1:hidden md:block w-2/12  text-right'>{`$${
					count * 800
				}`}</div>
			</div>
		</div>
	);
};
