import Button from '../button/button.component.tsx';
import H1 from '../header/header.component.tsx';

export default function Hero1() {
	return (
		<section className='w-full   p-6  flex  justify-center   centerrr  left-[50%] top-[55%] lg:top-[60%]'>
			<div className=' w-full bg-black2 backdrop-blur-xl rounded-xl p-6 h-full gap-12 flex flex-col  items-center || md:gap-4 md:p-6  md:justify-between md:items-start md:min-h-[16rem]	'>
				<div className='flex justify-between text-[.64rem] font-SFPro w-full || md:hidden'>
					<span className='small_text1'>
						Delhi, <br /> India{' '}
						<span id='MyClockDisplay'></span>
					</span>
					<span className='small_text1'>
						+91 872 396 3206 <br />
						info@designjockey.com
					</span>
				</div>
				<div className='text-center flex flex-col  items-center gap-8	|| md:hidden	'>
					<H1 text='Subscribe To Design' />
					<p className='small_text || md:hidden'>
						One flat subscription for all your design needs.
					</p>
					<Button
						text='See Plans'
						className='bg-color-secondary btn_base  md:hidden  '
						onClick={(e) => console.log(e)}
					/>
				</div>
				<div className='hidden || w-full md:flex md:flex-row md:justify-between md:items-start '>
					<div className='text-center flex flex-col  	w-4/12 	'>
						<H1 text='Subscribe To Design' />
					</div>

					<Button
						text='See Plans'
						className='btn_base bg-color-secondary  '
						onClick={(e) => console.log(e)}
					/>
				</div>
				<div className='hidden || text-[.64rem] font-SFPro  w-full md:flex justify-between '>
					<p className='small_text  font-SFPro '>
						One flat subscription for all your design needs.
					</p>
					<span className='small_text1 '>
						Delhi, <br /> India{' '}
						{new Date().toLocaleTimeString('en-US', {
							hour: 'numeric',
							minute: 'numeric',
							hour12: true,
						})}
						<span id='MyClockDisplay'></span>
					</span>
					<span className='small_text1'>
						+91 872 396 3206 <br />
						dhruba@designjockey.in
					</span>
				</div>
			</div>
		</section>
	);
}
