export const calculateAverage = (data) => {
  const sum = data.reduce((a, b) => a + b, 0);
  return sum / data.length;
};
