import Button from '../button/button.component.tsx';
import H1 from '../header/header.component.tsx';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { PuffLoader } from 'react-spinners';
export default function Hero1() {
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
					<section className='xl:w-[80vw] 2xl:w-[80vw]  mx-auto px-6 md:px-14 xl:px-0 w-full     flex  justify-center absolute  -translate-x-1/2   left-[50%] top-[25%] m3:top-[35%] lg:top-[50%] lg:-translate-y-1/2'>
						<div className=' w-full bg-black2 backdrop-blur-xl rounded-xl p-6 h-full gap-12 flex flex-col  items-center || md:gap-4 md:p-6  md:justify-between md:items-start md:min-h-[18rem]	'>
							<div className='flex justify-between text-[.64rem] font-SFPro w-full  md:hidden'>
								<span className='text-[.6rem]'>
									Delhi, <br /> India
									<span id='MyClockDisplay'></span>
								</span>
								<span className='text-[.6rem]'>
									+91 872 396 3206 <br />
									info@designjockey.com
								</span>
							</div>
							<div className='text-center flex flex-col  w-full gap-8 md:hidden '>
								<H1 text='One Subscription, Limitless Designs' />
								<p className='small_text md:hidden'>
									Get all your design requirements covered
									with one flat subscription
								</p>
								<Button
									text='See Plans'
									className='bg-color-secondary btn_base  md:hidden w-full  '
									onClick={(e) => console.log(e)}
								/>
							</div>
							<div className='hidden || w-full md:flex md:flex-row md:justify-between md:items-start '>
								<div className='text-center flex flex-col  	w-6/12 	'>
									<H1 text='One Subscription, Limitless Designs' />
								</div>

								<Button
									text='See Plans'
									className='btn_base bg-color-secondary  '
									onClick={(e) => console.log(e)}
								/>
							</div>
							<div className='hidden || text-[.64rem] font-SFPro  w-full md:flex justify-between '>
								<p className='small_text  font-SFPro '>
									Get all your design requirements covered
									with one flat subscription
								</p>
								<span className='small_text1 '>
									Delhi, <br /> India{' '}
									{new Date().toLocaleTimeString('en-US', {
										hour: 'numeric',
										minute: 'numeric',
										hour12: true,
									})}
									{/* <span id='MyClockDisplay'></span> */}
								</span>
								<span className='small_text1'>
									+91 872 396 3206 <br />
									dhruba@designjockey.in
								</span>
							</div>
						</div>
					</section>
				) : (
					''
				)}
			</div>
		</>
	);
}
