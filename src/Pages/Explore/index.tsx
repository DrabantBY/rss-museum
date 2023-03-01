import ExploreBody from '@components/ExploreBody';
import SliderExplore from '@components/SliderExplore';
import './style.scss';

const Explore = (): JSX.Element => {
  return (
    <section className="section-explore main__section-explore">
      <div className="container section-explore__container">
        <ExploreBody />
        <SliderExplore />
      </div>
    </section>
  );
};

export default Explore;
