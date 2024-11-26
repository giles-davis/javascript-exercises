const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = (numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
}

const multiply = (numbers) => {
  return numbers.reduce((total, num) => total * num, 1);
};

const power = (base, exponent) => {
  return Math.pow(base, exponent);
};

const factorial = function fact(num) {
  let res = 1; 
    
  if(num === 0)
      return 1;
  for (let i = 2; i <= num; i++) 
      res = res * i; 
  return res; 
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
