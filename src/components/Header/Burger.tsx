import { useState } from 'react';

export const Burger = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <button
      className={`burger header__burger navbar__burger${
        isClose ? ' close' : ''
      }`}
      type="button"
      onClick={() => setIsClose(!isClose)}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
