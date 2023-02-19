import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '@Pages/Main';
import Welcome from '@Pages/Welcome';
import Tour from '@Pages/Tour';
import Visiting from '@Pages/Visiting';

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
        path: 'visiting',
        element: <Visiting />,
      },
      {
        path: 'tours/:name',
        element: <Tour />,
      },
    ],
  },
]);

const App = (): JSX.Element => <RouterProvider router={router} />;
export default App;
