import { TITLES } from '@/constants';
import CardVisiting from '@components/CardVisiting';
import './style.scss';

const Visiting = (): JSX.Element => {
  return (
    <section className="section-visiting main__section-visiting">
      <div className="container section-visiting__container">
        <h2 className="title section-visiting__title">virtual tour</h2>
        <ul className="cards section-visiting__cards">
          {TITLES.map((title, index) => (
            <CardVisiting key={title} title={title} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Visiting;
