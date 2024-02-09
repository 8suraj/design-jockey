import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/svgs/logo.svg';
import humburger from '../../assets/svgs/humburger.svg';
import Button from '../button/button.component';
import Hero1 from '../hero/hero1.component';
import './hero1.css';
// import { DotLoader } from 'react-spinners';
import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../../Frame_2_1.json';
import Spline from '@splinetool/react-spline';

export default function Navbar() {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageLoaded = () => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 1000);
	};

	return (
		<>
			<div className=' hero1 h-[100vh] w-full xl:w-[80vw] 2xl:w-[80vw]  mx-auto   relative '>
				<div className='absolute left-0 top-0 bottom-0 right-0  '>
					<Spline
						scene='https://prod.spline.design/vX7yj5sSCJWjyQFW/scene.splinecode'
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
					<div className=' w-[30vw] mx-auto'>
						<Player
							src={animation}
							className='player'
							loop
							autoplay
						/>
					</div>
				</div>
				{isLoaded ? (
					<div className='p-6 w-full  centerrr1 left-[50%] top-[10%] '>
						<nav className='w-full    flex items-center rounded-xl     bg-black2 backdrop-blur-xl	'>
							<div className='flex w-full  justify-between items-center '>
								<Link className='h-full  md:pl-2' to='/'>
									<img
										src={logo}
										alt='logo'
										className='w-8 md:w-10 '
									/>
								</Link>
								<ul className=' text-color-primary items-center gap-4 m1:text-[.65rem] text-[.65rem]   md:text-[.75rem] hidden md:flex'>
									<Link to='/cart'>store </Link>
									<Link to=''> work </Link>
									<Link to=''>serices</Link>
									<Link to=''>plans </Link>
									<Link to='/cart'>cart</Link>
								</ul>
								<div className='md:hidden '>
									<img src={humburger} alt='logo' />
								</div>
								<Button
									text='login'
									className='btn_base  bg-black4  hidden md:block '
									onClick={(e) => console.log(e)}
								/>
							</div>
						</nav>
					</div>
				) : (
					''
				)}
				{isLoaded ? <Hero1 /> : ''}
			</div>

			<Outlet />
		</>
	);
}
