const handleCounter = (number: number): string =>
  number < 10 ? `0${number}` : `${number}`;

export default handleCounter;
