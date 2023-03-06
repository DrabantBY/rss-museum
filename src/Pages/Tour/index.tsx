import { useParams } from 'react-router-dom';
import { TOURS } from '@/types';

const Tour = (): JSX.Element => {
  const { name } = useParams() as { name: keyof typeof TOURS };

  return <iframe src={TOURS[name]} allowFullScreen loading="lazy"></iframe>;
};

export default Tour;
