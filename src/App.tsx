import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './components/Main';

const router = createBrowserRouter([{ path: '/', element: <Main /> }]);

export const App = () => <RouterProvider router={router} />;
