import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/home';
import { PublicRoute } from './pages/routes/publicRoute';
import { AnimatePresence } from 'framer-motion';
import { type IMenuSidebar, itemSidebar, planeRoutes } from './components/global/asidebar/config';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicRoute />,
		children: [
			{ path: '/', element: <Home /> },
			...planeRoutes.map((item: any) => {
				return {
					path: item.to,
					element: item.component,
				};
			}),
		],
	},
]);
export default function RoutesDom(_props: unknown): JSX.Element {
	return (
		<AnimatePresence>
			<RouterProvider router={router} />
		</AnimatePresence>
	);
}
