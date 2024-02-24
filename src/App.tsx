import { lazy, Suspense } from 'react';
import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import { PuffLoader } from 'react-spinners';
import NotFound from './pages/notFound/notFound.router.tsx';
import Product from './pages/product/product.router.tsx';
const Home = lazy(
	() => import('./pages/home/home.router.tsx')
);
const Cart = lazy(
	() => import('./pages/cart/cart.router.tsx')
);
const Navbar = lazy(
	() => import('./components/navbar/navbar.component.tsx')
);

const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Navbar />}>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
				<Route path='product/:id' element={<Product />} />
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
						<PuffLoader color='#C4FE01' />
					</div>
				}>
				<RouterProvider router={routes} />
			</Suspense>
		</>
	);
}

export default App;
