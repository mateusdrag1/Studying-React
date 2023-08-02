import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../page/Home';
import { Phrases } from '../page/Phrases';
import TasksList from '../page/TasksList';
import IsAlcoholBetter from '../page/IsAlcoholBetter';
import { ErrorPage } from '../page/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/phrases',
		element: <Phrases />,
	},
	{
		path: '/tasks',
		element: <TasksList />,
	},
	{
		path: '/combustive',
		element: <IsAlcoholBetter />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);

export { router };
