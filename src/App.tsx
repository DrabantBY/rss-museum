import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '@Pages/Main';
import Welcome from '@/Pages/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      //   {
      //     path: 'visiting',
      //     element: <Visiting />,
      //   },
    ],
  },
]);

const App = (): JSX.Element => <RouterProvider router={router} />;
export default App;
