const convertToCelsius = function(fah) {
  const product = (fah - 32) * 5;
  const result = product / 9;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  const product = cel * 9;
  const quotient = product / 5;
  const result = quotient + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
