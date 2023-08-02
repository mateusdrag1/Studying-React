import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			limit={3}
		/>
	</React.StrictMode>
);