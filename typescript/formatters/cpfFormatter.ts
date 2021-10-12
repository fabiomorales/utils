const cpfFormatter = (cpf: string) => {
  const firstElement = cpf.slice(0, 3);
  const secondElement = cpf.slice(3, 6);
  const thirdElement = cpf.slice(6, 9);
  const fourthElement = cpf.slice(9, 11);

  return `${firstElement}.${secondElement}.${thirdElement}-${fourthElement}`;
};

export default cpfFormatter;
