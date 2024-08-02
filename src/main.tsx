import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';
import NotFound from './pages/notFound/notFound.router.tsx';
import { RecoilRoot } from 'recoil';
ReactDOM.createRoot(
	document.getElementById('root')!
).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={NotFound}>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</ErrorBoundary>
	</React.StrictMode>
);
