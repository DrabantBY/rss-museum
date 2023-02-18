import { Link } from 'react-router-dom';

import './style.scss';

const Greeting = (): JSX.Element => {
  return (
    <div className="greeting section-welcome__greeting">
      <h2 className="title greeting__title section-welcome__title">
        welcome to&nbsp;the&nbsp;louvre
      </h2>
      <p className="slogan greeting__slogan section-welcome__slogan">
        from the castle to the museum
      </p>

      <Link
        className="link-discover greeting__link-discover section-welcome__link-discover"
        to={`/tours/DiscoverTheLouvre`}>
        Discover the Louvre
      </Link>
    </div>
  );
};

export default Greeting;
