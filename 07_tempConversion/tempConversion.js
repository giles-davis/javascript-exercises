const convertToCelsius = function(numF) {
  let conversion = (numF - 32) * 5/9;
  return Number(conversion.toFixed(1))
};

const convertToFahrenheit = function(numC) {
  let conversion = numC * (9/5) + 32;
  return Number(conversion.toFixed(1))
};



console.log(convertToCelsius(86).toFixed(1));
console.log(convertToFahrenheit(23).toFixed(1));

// // Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
