const cnpjFormatter = (cnpj) => {
  const firstElement = cnpj.slice(0, 2);
  const secondElement = cnpj.slice(2, 5);
  const thirdElement = cnpj.slice(5, 8);
  const fourthElement = cnpj.slice(8, 12);
  const fifithElement = cnpj.slice(12, 15);

  return `${firstElement}.${secondElement}.${thirdElement}/${fourthElement}-${fifithElement}`;
};

export default cnpjFormatter;
