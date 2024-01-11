import { Outlet } from 'react-router-dom';
import logo from '../../assets/svgs/logo.svg';
import humburger from '../../assets/svgs/humburger.svg';

export default function Navbar() {
	return (
		<>
			<nav className='flex justify-between items-center rounded-xl w-11/12 m-auto mt-8 mb-16 p-4 bg-black2 backdrop-blur-xl		 md:hidden '>
				<div>
					<img src={logo} alt='logo' />
				</div>
				<div>
					<img src={humburger} alt='logo' />
				</div>
			</nav>
			<Outlet />
		</>
	);
}
