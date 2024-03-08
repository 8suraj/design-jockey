import H1 from '../../components/header/header.component';
import tick from './tick.svg';
import Button from '../../components/button/button.component';
import im1 from './a.png';
import branding from '../../assets/product/branding.png';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
const d = [
	'Brand Logo',
	'Typography',
	'Colors',
	'Stationary',
	'Mockups',
	'Guideline Booklet',
	'Source file ownership',
	'Dedicated designer',
	'Update every 48 hrs',
];
export default function ProductPage() {
	// const { id } = useParams();
	const [isLoaded, setIsLoaded] = useState(true);
	const handleImageLoaded = () => {
		setIsLoaded(true);
	};
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 100,
				behavior: 'smooth',
			});
		}, 200);
	}, []);
	return (
		<section className='py-4 md:py-10 '>
			<div className=' hero1 h-[100vh]  w-full  '>
				<div className='absolute left-0 top-0 bottom-0 right-0   '>
					<img
						src={branding}
						alt=''
						onLoad={handleImageLoaded}
						className={`${
							isLoaded ? 'OP1' : 'hidden'
						} w-full h-full object-cover`}
					/>
				</div>
				<div className='w-full lg:w-[80vw] xl:w-[80vw] 2xl:w-[80vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100vh]  '>
					<div className=' mt-5 w-full lg:w-fit  absolute   px-6 lg:p-8 lg:pr-5    -translate-x-1/2 lg:-translate-x-[100%]  -translate-y-1/2 top-[60%] left-[50%]  lg:left-[100%]   m2:top-[55%] m3:top-[50%] lg:top-[40%]  lg:-translate-y-1/4  '>
						<div className='   bg-black2 backdrop-blur-xl rounded-xl overflow-hidden '>
							<div className='flex flex-col gap-5 p-6'>
								<H1 text='Identity' />
								<div className='flex flex-col  items-start'>
									<span className='lg:text-base	 xl:text-lg'>
										$400
									</span>
									<span className='font-SFPro text-[.6rem] leading-5 '>
										Complete guidelines - 15 - 20 Days
									</span>
								</div>
								<div className='flex flex-col gap-2'>
									{d?.map((e) => (
										<div className='flex font-SFPro text-sm items-center gap-4 '>
											<span>
												<img src={tick} alt='' />
											</span>
											<span>{e}</span>
										</div>
									))}
								</div>
								<Button
									text='Buy now'
									className='bg-color-secondary btn_base  w-full'
									onClick={() => {}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
				<div className='  py-[3rem] md:py-10   '>
					<div className='py-16 flex flex-col gap-8  md:px-14 sm:gap-16 md:gap-16 px-6 xl:px-4'>
						<div className=' flex flex-col gap-16  '>
							<div className='flex flex-col md:flex-row justify-between    gap-8 md:gap-0 '>
								<div className='lg:w-[47%] w-full text-center lg:text-left '>
									<H1 text='Why branding is important' />
									<p className='small_text1 font-SFPro'>
										Perks so good you'll never need to go
										anywhere else for your design.
										Seriously.
									</p>
								</div>
								<div className='lg:w-[47%] w-full rounded-xl overflow-hidden lg:h-[20rem]'>
									<img
										src={im1}
										alt=''
										className='object-fil w-full rounded-xl	'
									/>
								</div>
							</div>
						</div>
						<div className='xl:w-[80vw] 2xl:w-[80vw] mx-auto flex flex-col gap-16'>
							<div className='flex flex-col md:flex-row justify-between    gap-8 md:gap-8'>
								<div className='lg:w-[47%] w-full text-center lg:text-left md:order-2 '>
									<H1 text='Why branding is important' />
									<p className='small_text1 font-SFPro  '>
										Perks so good you'll never need to go
										anywhere else for your design.
										Seriously.
									</p>
								</div>
								<div className='lg:w-[47%] w-full rounded-xl overflow-hidden lg:h-[20rem]  '>
									<img
										src={im1}
										alt=''
										className='object-contain w-full'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
