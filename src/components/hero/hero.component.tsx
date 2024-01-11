import Button from '../button/button.component.tsx';
export default function Hero() {
	return (
		<section className='flex  justify-center  '>
			<div className='w-11/12 bg-black2 backdrop-blur-xl rounded-xl p-10 h-full gap-12 flex flex-col  items-center || md:gap-4 md:p-6 md:border  md:justify-between md:items-start md:min-h-[12rem]	'>
				<div className='flex justify-between text-[.64rem] font-SFPro  w-full || md:hidden'>
					<span>
						Delhi, <br /> India 01:19
					</span>
					<span>
						+1 202-754-8500 <br />
						Info@teamkarimganj.com
					</span>
				</div>
				<div className='text-center flex flex-col  items-center gap-8	 || sm:hidden	'>
					<h1 className='text-color-primary text-3xl sm:'>
						Subscribe <br />
						To Design
					</h1>
					<p className='text-sm  font-SFPro || md:hidden'>
						One flat subscription for all your design needs.
					</p>
					<Button
						text='See Plans'
						className='bg-color-secondary rounded-lg  text-sm text-center   p-8 sm:hidden || md:p-6 '
						onClick={(e) => console.log(e)}
					/>
				</div>
				<div className='hidden || w-full md:flex md:flex-row md:justify-between md:items-start'>
					<div className='text-center flex flex-col  items-center gap-8	 || 	'>
						<h1 className='text-color-primary text-4xl'>
							Subscribe <br />
							To Design
						</h1>
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
