import { useParams } from 'react-router-dom';
import { TOURS } from '@/types';

import './style.scss';

const Tour = (): JSX.Element => {
  const { name } = useParams<{ name: keyof typeof TOURS }>();
  const src = name === undefined ? '' : TOURS[name];

  return (
    <iframe
      src={src}
      // style="border:0;"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default Tour;
