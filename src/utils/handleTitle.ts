const handleTitle = (title: string): string => {
  return title
    .split(' ')
    .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1))
    .join('');
};

export default handleTitle;
