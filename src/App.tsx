import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '@Pages/Main';
// import { Visiting } from './components/Visiting/Visiting';
// import { Welcome } from './components/Welcome/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // children: [
    //   {
    //     index: true,
    //     element: <Welcome />,
    //   },
    //   {
    //     path: 'visiting',
    //     element: <Visiting />,
    //   },
    // ],
  },
]);

const App = (): JSX.Element => <RouterProvider router={router} />;
export default App;
