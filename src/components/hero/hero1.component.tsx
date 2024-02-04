import Button from '../button/button.component.tsx';
import Header1 from '../header/header.component.tsx';
export default function Hero1() {
	return (
		<section className='w-full   px-6 md:px-14 py-12 xl:px-4 flex  justify-center  centerrr  left-[50%] lg:top-[50%] top-[60%]'>
			<div className='w-full bg-black2 backdrop-blur-xl rounded-xl p-8 h-full gap-12 flex flex-col  items-center || md:gap-4 md:p-6  md:justify-between md:items-start md:min-h-[18rem]	'>
				<div className='flex justify-between text-[.64rem] font-SFPro w-full || md:hidden'>
					<span>
						Delhi, <br /> India 01:19
					</span>
					<span>
						+1 202-754-8500 <br />
						Info@teamkarimganj.com
					</span>
				</div>
				<div className='text-center flex flex-col  items-center gap-8	 || md:hidden	'>
					{/* <h1 className='text-color-primary md:text-3xl text-2xl '>
						Subscribe <br className='m3:hidden' />
						To Design
					</h1> */}
					<Header1 text='Subscribe To Design' />
					<p className='m1:text-[.75rem] text-[.75rem]   md:text-[.8rem]  font-SFPro || md:hidden'>
						One flat subscription for all your design needs.
					</p>
					<Button
						text='See Plans'
						className='bg-color-secondary rounded-lg  text-sm text-center   p-6  md:hidden || md:p-6 '
						onClick={(e) => console.log(e)}
					/>
				</div>
				<div className='hidden || w-full md:flex md:flex-row md:justify-between md:items-start'>
					<div className='text-center flex flex-col  items-center gap-8	 	'>
						{/* <h1 className='text-color-primary text-4xl'>
							Subscribe <br className='' />
							To Design
						</h1> */}
						<Header1 text='Subscribe To Design' />
						<p className='text-sm  font-SFPro || md:hidden'>
							One flat subscription for all your design
							needs.
						</p>
					</div>

					<Button
						text='See Plans'
						className='bg-color-secondary rounded-lg  text-sm text-center   p-8 || md:p-6 '
						onClick={(e) => console.log(e)}
					/>
				</div>
				<div className='hidden || text-[.64rem] font-SFPro  w-full md:flex justify-between'>
					<p className='text-sm  font-SFPro'>
						One flat subscription for all your design needs.
					</p>
					<span>
						Delhi, <br /> India 01:19
					</span>
					<span>
						+1 202-754-8500 <br />
						Info@teamkarimganj.com
					</span>
				</div>
			</div>
		</section>
	);
}
