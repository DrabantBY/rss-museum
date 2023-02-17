import Greeting from '@components/Greeting';
import SliderWelcome from '@components/SliderWelcome';
import './style.scss';

export const Welcome = (): JSX.Element => {
  return (
    <section className="section-welcome main__section-welcome">
      <div className="container section-welcome__container">
        <Greeting />
        <SliderWelcome />
      </div>
    </section>
  );
};

export default Welcome;
