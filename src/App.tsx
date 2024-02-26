import { lazy, Suspense } from 'react';
import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import { PuffLoader } from 'react-spinners';

const NotFound = lazy(
	() => import('./pages/notFound/notFound.router.tsx')
);
const ProductPage = lazy(
	() => import('./pages/product/product.router.tsx')
);

const Products = lazy(
	() => import('./pages/products/products.router.tsx')
);
const Home = lazy(
	() => import('./pages/home/home.router.tsx')
);
const Cart = lazy(
	() => import('./pages/cart/cart.router.tsx')
);
const MainLayout = lazy(
	() => import('./pages/layout/layout.router.tsx')
);

const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<MainLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
				<Route path='products' element={<Products />} />
				<Route
					path='products/:id'
					element={<ProductPage />}
				/>
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
