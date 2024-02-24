import Spline from '@splinetool/react-spline';
import H1 from '../../components/header/header.component';
import tick from './tick.svg';
import Button from '../../components/button/button.component';
import im1 from './a.png';
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
export default function Product() {
	return (
		<section className='py-16 '>
			<div className=' hero1 h-[100vh]  w-full  '>
				<div className='absolute left-0 top-0 bottom-0 right-0   '>
					<Spline
						scene='https://prod.spline.design/vEByxlHa0a4Jvxsi/scene.splinecode'
						// onLoad={handleImageLoaded}
						// className={`${
						// 	isLoaded ? 'OP1' : 'hidden'
						// } absolute left-0 top-0  bottom-0 right-0`}
					/>
				</div>
				<div className='w-full lg:right-[10%] absolute lg:top-[80%] p-8   lg:w-fit  -translate-x-1/2 lg:-translate-x-[0]  -translate-y-[10%] left-[50%] top-[25%] m3:top-[35%]  lg:-translate-y-1/2 '>
					<div className='   bg-black2 backdrop-blur-xl rounded-xl overflow-hidden '>
						<div className='flex flex-col gap-5 p-6'>
							<H1 text='Identity' />
							<div className='flex justify-between items-end '>
								<span className='lg:text-base	 xl:text-lg'>
									$400
								</span>
								<span className='font-SFPro text-[.6rem] leading-5'>
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
								onClick={(e) => console.log(e)}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='xl:w-[80vw] 2xl:w-[80vw] mx-auto flex flex-col gap-16 py-16 '>
				<div className='flex flex-col md:flex-row justify-between   p-4 gap-4'>
					<div className='lg:w-[45%] w-full text-center lg:text-left '>
						<H1 text='Why branding is important' />
						<span className='text-sm font-SFPro  '>
							Perks so good you'll never need to go anywhere
							else for your design. Seriously.
						</span>
					</div>
					<div className='lg:w-1/2 w-full rounded-xl overflow-hidden h-[22rem] '>
						<img
							src={im1}
							alt=''
							className='object-contain w-full 	'
						/>
					</div>
				</div>
			</div>
			<div className='xl:w-[80vw] 2xl:w-[80vw] mx-auto flex flex-col gap-16 py-16 '>
				<div className='flex flex-col md:flex-row justify-between   p-4 gap-4'>
					<div className='lg:w-1/2 w-full rounded-xl overflow-hidden h-[22rem] '>
						<img
							src={im1}
							alt=''
							className='object-contain w-full 	'
						/>
					</div>
					<div className='lg:w-[45%] w-full text-center lg:text-left '>
						<H1 text='Why branding is important' />
						<span className='text-sm font-SFPro  '>
							Perks so good you'll never need to go anywhere
							else for your design. Seriously.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
