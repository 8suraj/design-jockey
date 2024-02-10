import { lazy } from 'react';
export const Home = lazy(
	() => import('./home/home.router')
);
export const Cart = lazy(
	() => import('./cart/cart.router')
);
