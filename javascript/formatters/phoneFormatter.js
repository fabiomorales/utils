const phoneFormatter = (phone) => {
  const firstElement = phone.slice(3, 5);
  const secondElement = phone.slice(5, 10);
  const thirdElement = phone.slice(10, 14);

  return `(${firstElement}) ${secondElement}-${thirdElement}`;
};

export default phoneFormatter;
