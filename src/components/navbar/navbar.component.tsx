import { Outlet } from 'react-router-dom';
import logo from '../../assets/svgs/logo.svg';
import humburger from '../../assets/svgs/humburger.svg';
import Button from '../button/button.component';
// import Hero1 from '../hero/hero1.component';
import './hero1.css';
export default function Navbar() {
	return (
		<>
			<div className=' hero1 pb-20'>
				<nav className='flex  items-center rounded-xl w-11/12 m-auto mt-8 mb-16  bg-black2 backdrop-blur-xl	p-4  md:p-0	 '>
					<div className='flex w-full  justify-between items-center'>
						<div className='h-full  md:pl-2'>
							<img
								src={logo}
								alt='logo'
								className='w-8 md:w-10 '
							/>
						</div>
						<ul className=' text-color-primary items-center gap-4 md:text-sm lg:text-lg xl:text-xl hidden md:flex'>
							<li>store </li>
							<li> work </li>
							<li>serices</li>
							<li>plans </li>
							<li>cart</li>
						</ul>
						<div className='md:hidden '>
							<img src={humburger} alt='logo' />
						</div>
						<Button
							text='login'
							className=' rounded-lg  text-sm text-center  bg-black4 capitalize hidden md:block md:py-4 md:px-10 lg:py-6 lg:px-14 xl:py-8 xl:px-16'
							onClick={(e) => console.log(e)}
						/>
					</div>
				</nav>
				{/* <Hero1 /> */}
			</div>

			<Outlet />
		</>
	);
}
