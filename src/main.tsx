import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Main from './pages/Main/Main.tsx';
import Layout from './layouts/Layout/Layout.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import Film from './pages/Film/Film.tsx';
import Error from './pages/Error/Error.tsx';
import axios from 'axios';
import MainLayout from './layouts/Main/Main.tsx';
import { RequireSign } from './helpers/RequireSign.tsx';
import AuthLayout from './layouts/Auth/AuthLayout.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <RequireSign><MainLayout /></RequireSign>,
				children: [
					{
						path: '/',
						element: <Main />
					},
					{
						path: '/favorites',
						element: <Favorites />
					},
					{
						path: '/film/:id',
						element: <Film />,
						loader: async ({params}) => {
							return defer({
								data: axios.get(`http://185.70.185.206/?tt=${params.id}`).then(data => data).catch(e => e)
							})
						}
					}
				]
			},
			{
				path: '/auth',
				element: <AuthLayout />
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
