import logo from '../../assets/svgs/logo.svg';
import enter from '../../assets/svgs/enter.svg';
import logos from '../../assets/backgrounds/logos.png';
import Button from '../button/button.component';
export default function Footer() {
	return (
		<footer className=' w-full  '>
			<div className='flex flex-col  p-4 md:p-12 gap-6 md:gap-4 '>
				<h1 className='text-left  w-full text-sm'>
					sign up to <br className='md:hidden' /> our
					newsletters
				</h1>
				<div className='flex w-full md:w-9/12 '>
					<input
						type='text'
						placeholder='your@email.com'
						className='outline-0 w-9/12 bg-transparent	 border-b-8 border-grey-dark
						 placeholder:text-grey-dark placeholder:md:text-4xl placeholder:xl:text-6xl
						  placeholder:m1:text-[.85rem] placeholder:m2:text-[1.1rem]  placeholder:m3:text-[1.3rem]
						   md:text-4xl xl:text-6xl m1:text-[.85rem] 
						   m2:text-[1.1rem]  m3:text-[1.3rem]'
					/>
					<div className='w-2/12'>
						<img src={enter} alt='' className='w-8/12' />
					</div>
				</div>
				<div className='flex items-center gap-2 '>
					<input
						type='checkbox'
						name=''
						id=''
						className=' bg-transparent  border-grey-dark border-12'
					/>
					<label
						htmlFor=''
						className='font-SFPro text-sm text-grey-light m1:text-[.5rem] m2:text-[.6rem]  m3:text-[.7rem]'>
						I have read and accept the Terms & Privacy
					</label>
				</div>

				<div className='flex md:flex-row flex-col gap-6 md:gap-4 m1:text-[.5rem] m2:text-[.6rem]  m3:text-[.7rem] '>
					<div className='md:w-6/12  w-full  '>
						<div className='w-full flex flex-col md:gap-2  '>
							<div className='flex w-full items-center justify-around gap-4'>
								<div className='md:block hidden w-2/12'>
									<img
										src={logo}
										alt='logo'
										className='w-5/12'
									/>
								</div>
								<Button
									text='Get started'
									className='bg-black-light rounded-lg  text-sm text-center    py-6  md:w-10/12 w-full '
									onClick={(e) => console.log(e)}
								/>
							</div>
							<div className='w-full h-6   justify-around px-3 md:flex hidden '>
								<img
									src={logos}
									alt='logo'
									className='h-full'
								/>
							</div>
						</div>
					</div>
					<div className='flex md:w-6/12 w-full text-sm font-SFPro text-grey-light  m1:text-[.5rem] m2:text-[.6rem]  m3:text-[.7rem] '>
						<div className='flex w-full justify-between'>
							<div className='flex flex-col'>
								<h3 className='font-MExtended text-white pb-3'>
									Service
								</h3>
								<span>Security</span>
								<span>Offshore</span>
								<span>Industry</span>
								<span>Emergency</span>
							</div>
							<div className='flex flex-col'>
								<h3 className='font-MExtended  text-white pb-3'>
									Company
								</h3>
								<span>About us</span>
								<span>Expertise</span>
								<span>Fleet</span>
							</div>
							<div className='flex flex-col'>
								<h3 className='font-MExtended text-white pb-3'>
									More
								</h3>
								<span>News</span>
								<span>Contact</span>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='h-4 w-full bg-grey-dark md:h-2' />
					<div className='w-full flex justify-between font-SFPro items-center md:hidden'>
						<div>
							<img src={logo} alt='logo' />
						</div>
						<div className='m1:text-[.5rem] m2:text-[.6rem] m3:text-[.7rem]'>
							2023 © DesignJockey
						</div>
					</div>
					<div className='w-full flex justify-between font-SFPro m1:text-[.5rem] m2:text-[.6rem]  m3:text-[.7rem] '>
						<span className='md:block hidden'>
							2023 © DesignJockey
						</span>
						<div className='md:w-auto w-full flex  justify-between gap-3  '>
							<span>Cookie Policy </span>
							<span>Disclaimer</span>
							<span>Privacy Policy</span>
							<span>Terms of Service</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
