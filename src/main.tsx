import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main.tsx';
import Layout from './layouts/Layout/Layout.tsx';
import Auth from './pages/Auth/Auth.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import Film from './pages/Film/Film.tsx';
import Error from './pages/Error/Error.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />
			},
			{
				path: '/auth',
				element: <Auth />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/film/:id',
				element: <Film />
			},
			{
				path: '*',
				element: <Error />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
