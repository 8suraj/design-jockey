import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/svgs/logo.svg';
import humburger from '../../assets/svgs/humburger.svg';
import Button from '../button/button.component';
import Hero1 from '../hero/hero1.component';
import './hero1.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../../Frame_2_1.json';
import { useState } from 'react';

export default function Navbar() {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageLoaded = () => {
		setTimeout(() => setIsLoaded(true), 1500);
	};

	return (
		<>
			<div className=' hero1 h-[100vh]  xl:w-[80vw] 2xl:w-[80vw] mx-auto  px-6 md:px-14 py-12 xl:px-4   relative '>
				<iframe
					src='https://my.spline.design/computerlovecopy-297097b6007ecb2ac4e3cfffaecf66dd'
					loading='eager'
					frameBorder='0'
					width='100%'
					height='100%'
					onLoad={handleImageLoaded}
					style={{ opacity: isLoaded ? 1 : 0 }}
					className='absolute left-0 top-0 transition-opacity duration-500'
				/>
				{!isLoaded ? (
					<div className='w-full h-full flex items-center justify-center absolute left-0 top-0 '>
						{' '}
						<div className=' w-[30vw] mx-auto'>
							<Player
								src={animation}
								className='player'
								loop
								autoplay
							/>
						</div>
					</div>
				) : (
					''
				)}

				<nav className='flex items-center rounded-xl     bg-black2 backdrop-blur-xl	p-4  md:p-0	'>
					<div className='flex w-full  justify-between items-center'>
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
				<Hero1 />
			</div>

			<Outlet />
		</>
	);
}
