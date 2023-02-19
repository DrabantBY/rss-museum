import { useParams } from 'react-router-dom';
import { TOURS } from '@/types';

import './style.scss';

const Tour = (): JSX.Element => {
  const { name } = useParams() as { name: keyof typeof TOURS };

  return (
    <iframe
      src={TOURS[name]}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default Tour;
