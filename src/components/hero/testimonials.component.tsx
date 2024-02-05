import e1 from '../../assets/svgs/Ellipse1.svg';
import e2 from '../../assets/svgs/Ellipse2.svg';
import e3 from '../../assets/svgs/Ellipse3.svg';
import e4 from '../../assets/svgs/Ellipse4.svg';
import m1 from '../../assets/svgs/user.jpg';
import H1 from '../header/header.component';
export default function Hero2() {
	return (
		<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto  '>
			<div className='flex flex-col gap-2 px-4 md:px-12 py-12 xl:px-0 '>
				<div className='w-full h-full  m-auto bg-color-secondary rounded-lg flex flex-col md:flex-row   md:justify-around   p-4 md:p-10 lg:p-16 '>
					<div className='m1:text-center md:text-left w-full md:w-[48%] lg:w-[45%] lg:text-left '>
						{/* <h1 className='text-color-primary capitalize m1:text-[1.5rem] m2:text-[1.65rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[2.4rem] xl:text-[2.5rem]'>
							what our friends has to say
						</h1> */}
						<H1 text='what our friends has to say' />
					</div>
					<div className='w-full md:w-[45%] md:px-6 lg:px-12 px-3 flex flex-col gap-10   m1:items-center md:items-start '>
						<p className=' text-center  md:text-left   small_text1'>
							Designjockey replaces unreliable freelancers
							and expensive agencies for one flat monthly
							fee, with designs delivered so fast that it
							will blow your mind.
						</p>
						<div className='relative   h-12 m1:w-[10.7rem] lg:w-[12.5]'>
							<img
								src={e4}
								alt=''
								className='absolute m1:w-[3.2rem] lg:w-[3.8rem] m1:left-[7.5rem] lg:left-[8.7rem]'
							/>
							<img
								src={e3}
								alt=''
								className='absolute m1:w-[3.2rem] lg:w-[3.8rem] m1:left-[5rem] lg:left-[5.8rem]'
							/>
							<img
								src={e2}
								alt=''
								className='absolute m1:w-[3.2rem] lg:w-[3.8rem] m1:left-[2.5rem] lg:left-[2.9rem]'
							/>
							<img
								src={e1}
								alt=''
								className='absolute m1:w-[3.2rem] lg:w-[3.8rem]  '
							/>
						</div>
					</div>
				</div>
				<div className='flex lg:flex-row flex-col gap-2'>
					<div className='bg-[#191919] rounded-lg p-6  flex flex-col gap-6 lg:w-[60%]'>
						<div className='flex relative pl-4 lg:pl-8'>
							<h1 className='text-[2rem] lg:text-[2.5rem] text-[#C4FE01] absolute -left-2 -top-4'>
								"
							</h1>
							<h1 className='text-[#C4FE01] lg:text-2xl text-lg capitalize '>
								Design is everything, and these guys have
								nailed it.
							</h1>
						</div>
						<div className='flex gap-4 pl-4 lg:pl-8'>
							<div>
								<img
									src={m1}
									alt=''
									className='rounded-full w-12 h-12 object-cover'
								/>
							</div>
							<div>
								<h1 className='text-md'>Hrishiraj</h1>
								<p className='font-SFPro text-grey-light text-[.7rem]'>
									BTC
								</p>
							</div>
						</div>
					</div>
					<div className='bg-[#191919] text-grey-light rounded-lg p-4 md:p-6 text-sm text-center md:text-left flex flex-col gap-4 lg:w-[40%]'>
						<div>
							<h1 className='m1:text-[.7rem] lg:text-sm'>
								No meetings
							</h1>
							<p className='font-SFPro text-[.6rem]'>
								Don't like meetings? We don't either; so
								much so that we've outlawed them completely.
							</p>
						</div>
						<div>
							<h1 className='m1:text-[.7rem] lg:text-sm'>
								Easy dashboard
							</h1>
							<p className='font-SFPro text-[.6rem]'>
								Manage your design board using Trello. View
								active, queued and completed tasks with
								ease.
							</p>
						</div>
						<div>
							<h1 className='m1:text-[.7rem] lg:text-sm'>
								Invite unlimited team members
							</h1>
							<p className='font-SFPro text-[.6rem]'>
								Invite your entire team, so anyone can
								submit requests and track their progress.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
