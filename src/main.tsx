import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Main from './pages/Main/Main.tsx';
import Layout from './layouts/Layout/Layout.tsx';
import Auth from './pages/Auth/Auth.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import Film from './pages/Film/Film.tsx';
import Error from './pages/Error/Error.tsx';
import { AuthLayout } from './layouts/Auth/AuthLayout.tsx';
import axios from 'axios';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <AuthLayout><Main /></AuthLayout>
			},
			{
				path: '/favorites',
				element: <AuthLayout><Favorites /></AuthLayout>
			},
			{
				path: '/film/:id',
				element: <AuthLayout><Film /></AuthLayout>,
				loader: async ({params}) => {
					console.log(`https://search.imdbot.workers.dev/?tt=${params.id}`);
					return defer({
						data: await axios.get(`https://search.imdbot.workers.dev/?tt=${params.id}`).then(data => data).catch(e => e)
					})
				}
			},
			{
				path: '/auth',
				element: <Auth />
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
