import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '@Pages/Main';
import Welcome from '@Pages/Welcome';
import Tour from '@Pages/Tour';
import Visiting from '@Pages/Visiting';
import Explore from '@Pages/Explore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: '/tours/:name',
        element: <Tour />,
      },
      {
        path: '/visiting',
        element: <Visiting />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
    ],
  },
]);

const App = (): JSX.Element => <RouterProvider router={router} />;
export default App;
