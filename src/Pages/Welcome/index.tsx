import Greeting from '@components/Greeting';
import WelcomeSlider from '@components/WelcomeSlider';
import './style.scss';

export const Welcome = (): JSX.Element => {
  return (
    <section className="section-welcome main__section-welcome">
      <div className="container section-welcome__container">
        <Greeting />
        <WelcomeSlider />
      </div>
    </section>
  );
};

export default Welcome;
