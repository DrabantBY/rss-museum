import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './components/Main';
import { Visiting } from './components/Visiting/Visiting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'visiting',
        element: <Visiting />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
