import { Outlet } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<nav className='flex justify-between items-center rounded-xl m-5 p-4 bg-black2 backdrop-blur-xl		 md:hidden '>
				<div>
					<img src='/public/logo.svg' alt='logo' />
				</div>
				<div>
					<img
						src='/src/assets/svgs/humburger.svg'
						alt='logo'
					/>
				</div>
			</nav>
			<Outlet />
		</>
	);
}
