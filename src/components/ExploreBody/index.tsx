import './style.scss';

export const ExploreBody = (): JSX.Element => {
  return (
    <div className="section-explore__body">
      <h2 className="section-explore__title">picture explore</h2>
      <p className="section-explore__text">
        Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of
        the Spanish Golden Age.
      </p>
      <p className="section-explore__text">
        It was cleaned in 1984 to remove a <span>&quot;yellow veil&quot;</span>{' '}
        of dust that had gathered since the previous restoration in the 19th
        century.
      </p>
      <p className="section-explore__text">
        The cleaning provoked furious protests, not because the picture had been
        damaged in any way, but because it looked different.
      </p>
    </div>
  );
};

export default ExploreBody;
