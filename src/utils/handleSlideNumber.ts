const handleSlideNumber = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};

export default handleSlideNumber;
