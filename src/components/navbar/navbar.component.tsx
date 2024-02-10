import { Link, Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/svgs/logo.svg';
import humburger from '../../assets/svgs/humburger.svg';
import Button from '../button/button.component';
import './hero1.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
	const [isSticky, setIsSticky] = useState<boolean>(false);
	const [clicked, setClicked] = useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			const threshold = 0;
			if (offset > threshold) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
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
			<div
				className={`${
					isSticky
						? 'fixed left-[50%] top-[.4rem] '
						: ' absolute left-[50%] top-[1rem] '
				} centerrr1 px-6 md:px-14 py-12 xl:px-4 w-full  xl:w-[80vw] 2xl:w-[80vw]  z-20 `}>
				<nav className='w-full   p-2 lg:p-0 flex items-center rounded-xl     bg-black2 backdrop-blur-xl '>
					<div className='flex w-full  justify-between items-center '>
						<Link
							className='h-full  lg:pl-4 '
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
								to='/cart'
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
						<div className='lg:hidden '>
							<img src={humburger} alt='logo' />
						</div>
						<Button
							text='login'
							className='btn_base  bg-black4  hidden lg:block '
							onClick={(e) => console.log(e)}
						/>
					</div>
				</nav>
			</div>
			<Outlet />
		</>
	);
}
