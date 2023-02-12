import Greeting from '@components/Greeting';
import './style.scss';

export const Welcome = (): JSX.Element => {
  return (
    <section className="section-welcome main__section-welcome">
      <div className="container section-welcome__container">
        <Greeting />
        <div className="slider">asdfasdf</div>
      </div>
    </section>
  );
};

export default Welcome;
