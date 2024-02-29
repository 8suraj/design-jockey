import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/svgs/logo.svg';
import cross from '../../assets/svgs/cross.svg';
import humburger from '../../assets/svgs/humburger.svg';
import Button from '../button/button.component';
import { useState, useEffect } from 'react';

export default function Navbar() {
	const [clicked, setClicked] = useState<boolean>(false);
	const [mobileMenu, setMobileMenu] =
		useState<boolean>(false);
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 100,
				behavior: 'smooth',
			});
		}, 200);
	}, [clicked]);
	return (
		<>
			<div className=' fixed left-[50%] top-[.4rem] centerrr1  xl:w-[80vw] 2xl:w-[80vw]  z-[100] px-6 md:px-14  xl:px-4 w-full  '>
				<nav className='w-full mt-8   p-4 px-6 lg:p-0 flex items-center rounded-xl     bg-black2 backdrop-blur-xl    '>
					<div className='flex w-full  justify-between items-center '>
						<Link
							className='h-full  lg:pl-4'
							to='/'
							onClick={() => {
								setClicked(!clicked);
							}}>
							<img
								src={logo}
								alt='logo'
								className='w-8 md:w-10 '
							/>
						</Link>
						<ul className=' text-color-primary items-center gap-4 m1:text-[.65rem] text-[.65rem]   md:text-[.75rem] hidden lg:flex'>
							<Link
								to='/products'
								onClick={() => {
									setClicked(!clicked);
								}}>
								store
							</Link>
							<Link
								to=''
								onClick={() => {
									setClicked(!clicked);
								}}>
								work
							</Link>
							<HashLink smooth to={'/#services'}>
								services
							</HashLink>
							<HashLink smooth to={'/#plans'}>
								plans
							</HashLink>
							<Link
								to='/cart'
								onClick={() => {
									setClicked(!clicked);
								}}>
								cart
							</Link>
						</ul>
						<div
							className='lg:hidden '
							onClick={() => setMobileMenu(!mobileMenu)}>
							{!mobileMenu ? (
								<img src={humburger} alt='logo' />
							) : (
								<img src={cross} alt='logo' />
							)}
						</div>
						<Button
							text='login'
							className='btn_base  bg-black4  hidden lg:block '
							onClick={() => {}}
						/>
					</div>
				</nav>

				{mobileMenu ? (
					<div className='  z-[100]  pt-6  lg:hidden '>
						<div className='bg-black2 backdrop-blur-xl w-full  rounded-xl '>
							<ul className=' text-color-primary   flex flex-col '>
								<Link
									to='/products'
									className=' p-4  pt-8 m2:py-6 m2:pt-12 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									onClick={() => {
										setClicked(!clicked);
										setMobileMenu(false);
									}}>
									store
								</Link>
								<Link
									to=''
									className='p-4 py-5  m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									onClick={() => {
										setClicked(!clicked);
										setMobileMenu(false);
									}}>
									work
								</Link>
								<HashLink
									smooth
									className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									to={'/#services'}
									onClick={() => setMobileMenu(false)}>
									services
								</HashLink>
								<HashLink
									smooth
									className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									to={'/#plans'}
									onClick={() => setMobileMenu(false)}>
									plans
								</HashLink>
								<Link
									className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									to='/cart'
									onClick={() => {
										setClicked(!clicked);
										setMobileMenu(false);
									}}>
									cart
								</Link>
								<div className=' pt-5 m2:pt-6 w-full p-4'>
									<button
										className='w-full btn_base  rounded-lg capitalize bg-black4  text-white  '
										onClick={(e) => {
											console.log(e);
											setMobileMenu(false);
										}}>
										login
									</button>
								</div>
							</ul>
						</div>
					</div>
				) : (
					''
				)}
			</div>
			{/* <div className='absolute left-0 right-0 top-0 bottom-0 bg-black2 backdrop-blur z-20 '>
				asd
			</div> */}
		</>
	);
}
