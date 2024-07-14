const convertToCelsius = function(input) {
 const celsius = (input - 32) * 5/9;
  return Math.round(celsius * 10) / 10
};

const convertToFahrenheit = function(input) {
  const faren = (9/5) * input + 32;
  return Math.round(faren * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
