import { Link } from 'react-router-dom';
import handleTitle from '@/utils/handleTitle';
import './style.scss';

const CardVisiting: React.FC<{ title: string; index: number }> = ({
  title,
  index,
}): JSX.Element => {
  return (
    <li className="cards-item section-visiting__cards-item">
      <Link
        className="cards-link section-visiting__cards-link"
        to={`/tours/${handleTitle(title)}`}>
        <figure>
          <img
            // eslint-disable-next-line prettier/prettier
            srcSet={`
            src/assets/images/visiting/visiting_280_${index + 1}.jpg 280w,
            src/assets/images/visiting/visiting_330_${index + 1}.jpg 330w,
            src/assets/images/visiting/visiting_440_${index + 1}.jpg 440w`}
            sizes="(max-width: 769px) 280px, (max-width: 1025px) 330px, 440px"
            src={`src/assets/images/visiting/visiting_440_${index + 1}.jpg`}
            alt="tour"
          />
          <figcaption className="cards-title section-visiting__cards-title">
            {title}
          </figcaption>
        </figure>
      </Link>
      <p className="cards-description section-visiting__cards-description">
        360° virtual tour <span>google street panorama view</span>
      </p>
    </li>
  );
};
export default CardVisiting;
