const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {  
    const totalSum = arr.reduce((total, number) => {
      return total + number;
    })
    return totalSum;
  }
	
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {  
    const totalSum = arr.reduce((total, number) => {
      return total * number;
    }, 1)
    return totalSum;
  }
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) {
    return 1
  } else {
    const arr = Array.from({length: a}, (v, i) => 1 + i);
    totalProduct = arr.reduce((total, number) => {
      return total * number
    }, 1)
    return totalProduct
  }
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
