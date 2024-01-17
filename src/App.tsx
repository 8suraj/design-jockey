import { lazy, Suspense } from 'react';
import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
// const Footer = lazy(
// 	() => import('./components/footer/footer.component.tsx')
// );
const Navbar = lazy(
	() => import('./components/navbar/navbar.component.tsx')
);
// const Membership = lazy(
// 	() => import('./components/mem/mem.component.tsx')
// );
const Home = lazy(
	() => import('./pages/home/home.router.jsx')
);
const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Navbar />}>
				<Route path='/' element={<Home />} />
			</Route>
		</>
	)
);
function App() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<RouterProvider router={routes} />
			</Suspense>
		</>
	);
}

export default App;
