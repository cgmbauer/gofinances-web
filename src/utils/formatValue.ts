const formatValue = (value: number, type?: 'income' | 'outcome'): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
