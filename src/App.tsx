import { lazy, Suspense } from 'react';
import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';


import { PuffLoader } from 'react-spinners';
const Terms = lazy(() => import('./pages/terms/terms.tsx'));
const PrivacyPolicy = lazy(
	() => import('./pages/privacyPolicy/privacyPolicy.tsx')
);

const NotFound = lazy(
	() => import('./pages/notFound/notFound.router.tsx')
);
const ProductPage = lazy(
	() => import('./pages/product/product.router.tsx')
);

const Store = lazy(
	() => import('./pages/store/store.router.tsx')
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
const Work = lazy(
	() => import('./pages/work/work.router.tsx')
);
const Dashboard = lazy(() => import('./pages/Dashboard/MainComponents.jsx'));




const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Home />} />
			  <Route path='/' element={<MainLayout />}>
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
				<Route path='store' element={<Store />} />
				<Route path='store/:id' element={<ProductPage />} />
				<Route
					path='privacy-policy'
					element={<PrivacyPolicy />}
				/>
				<Route path='terms' element={<Terms />} />
				<Route path='work' element={<Work />} />
				
			</Route>
			<Route path='dashboard' element={<Dashboard />} /> 
		</>
	)
);
function App() {
	return (
		<>
			<Suspense
				fallback={
					<div className='w-[100vw] h-[100vh] flex items-center  justify-center '>
						<PuffLoader color='#C4FE01' />
					</div>
				}>
				<RouterProvider router={routes} />
			</Suspense>
		</>
	);
}

export default App;
