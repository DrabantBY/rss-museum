import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container main__container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
