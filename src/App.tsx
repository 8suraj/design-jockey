import { lazy, Suspense } from 'react';
import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from './Frame_2_1.json';
import { Cart, Home } from './pages/index.ts';
const Navbar = lazy(
	() => import('./components/navbar/navbar.component.tsx')
);

const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Navbar />}>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Route>
		</>
	)
);
function App() {
	return (
		<>
			<Suspense
				fallback={
					<div className='w-[100vw] h-[100vh] flex items-center justify-center '>
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
				}>
				<RouterProvider router={routes} />
			</Suspense>
		</>
	);
}

export default App;
