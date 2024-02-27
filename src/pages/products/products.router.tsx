import Button from '../../components/button/button.component.tsx';
import H1 from '../../components/header/header.component.tsx';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { PuffLoader } from 'react-spinners';
import w from '../../assets/product/w.png';
import q from '../../assets/product/q.png';
import e from '../../assets/product/e.png';
import ProductItem from '../../components/products/products.component.tsx';
const img = [w, q, e];
export default function Products() {
	const [isLoaded, setIsLoaded] = useState(true);
	const handleImageLoaded = () => {
		setIsLoaded(true);
	};

	return (
		<>
			<div className=' hero1 h-[100vh]  w-full  '>
				<div className='absolute left-0 top-0 bottom-0 right-0   '>
					<Spline
						scene='https://prod.spline.design/vEByxlHa0a4Jvxsi/scene.splinecode'
						onLoad={handleImageLoaded}
						className={`${
							isLoaded ? 'OP1' : 'hidden'
						} absolute left-0 top-0  bottom-0 right-0`}
					/>
				</div>
				<div
					className={`${
						isLoaded ? 'OP2 hidden ' : ''
					} w-full h-full flex items-center justify-center absolute left-0 top-0  `}>
					<PuffLoader color='#C4FE01' />
				</div>
				{isLoaded ? (
					<section className='centerrr1  xl:w-[80vw] 2xl:w-[80vw] px-6 md:px-14  xl:px-4 w-full   mx-auto     flex  justify-center absolute  -translate-x-1/2   left-[50%] top-[25%] m3:top-[25%] lg:top-[50%] lg:-translate-y-1/2 '>
						<div className=' w-full bg-black2 backdrop-blur-xl rounded-xl p-6 h-full gap-12 flex flex-col  items-center || md:gap-4 md:p-6   md:justify-between md:items-start md:min-h-[18rem] 	'>
							<div className='flex justify-between text-[.64rem] font-SFPro w-full  md:hidden'>
								<H1 text='Design and more' />
								<p className='small_text md:hidden'>
									One flat subscription for all your design
									needs.
								</p>
								<Button
									text='See Plans'
									className='bg-color-secondary btn_base  md:hidden w-full  '
									onClick={(e) => console.log(e)}
								/>
							</div>
							<div className='hidden || w-full md:flex md:flex-row md:justify-between md:items-start '>
								<div className='text-center flex flex-col  	w-6/12 	'>
									<H1 text='Design and more' />
								</div>

								<Button
									text='See Plans'
									className='btn_base bg-color-secondary  '
									onClick={(e) => console.log(e)}
								/>
							</div>
							<div className='hidden || text-[.64rem] font-SFPro  w-full md:flex justify-between '>
								<p className='small_text  font-SFPro '>
									One flat subscription for all your design
									needs.
								</p>
							</div>
						</div>
					</section>
				) : (
					''
				)}
			</div>
			<div className='xl:w-[80vw] 2xl:w-[80vw] mx-auto'>
				<div className='flex flex-col lg:grid grid-cols-3 gap-4 py-24 items-center px-4'>
					{img?.map((e, i) => (
						<ProductItem image={e} index={i} />
					))}
				</div>
			</div>
		</>
	);
}
