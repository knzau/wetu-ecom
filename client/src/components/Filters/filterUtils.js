export const getColorFilterStyles = (filter) => {
  return {
    width: '18px',
    height: '18px',
    backgroundColor: filter,
    borderRadius: '50%'
  };
};

export const filterPriceOptions = [
  { id: 1, name: 'price', value: '7-50', label: '$7 - $50', showLabel: true },
  { id: 2, name: 'price', value: '50-150', label: '$50 - $150', showLabel: true },
  { id: 3, name: 'price', value: '150-300', label: '$150 - $300', showLabel: true },
  { id: 4, name: 'price', value: '300-600', label: '$300 - $600', showLabel: true },
  { id: 5, name: 'price', value: '600-1200', label: '$600 - $1200', showLabel: true },
  { id: 6, name: 'price', value: '1200+', label: '$1200+', showLabel: true }
];
