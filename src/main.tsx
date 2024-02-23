import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';
import NotFound from './pages/notFound/notFound.router.tsx';

ReactDOM.createRoot(
	document.getElementById('root')!
).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={NotFound}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
