import { lazy, Suspense } from 'react';
import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
// const Hero = lazy(
// 	() => import('./components/hero/hero.component.tsx')
// );
const Navbar = lazy(
	() => import('./components/navbar/navbar.component.tsx')
);

const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Navbar />}>
				{/* <Route path='/' element={<Hero />} /> */}
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
