const add = function(num1, num2) {
	   return num1 + num2;
};

const subtract = function(num1, num2) {
	 return num1 - num2;
};

const sum = function(arr) {
    let total = 0;
	  arr.forEach(element => {
        total += element;
    });
    return total;
};

const multiply = function(numbers) {
      return numbers.reduce((total, num) => total * num, 1);
};

const power = function(num1, num2) {
	   return Math.pow(num1, num2);
};

const factorial = function(num) {
     let fact = 1;
	   for (let i = 1; i <= num; i++) {
         fact = fact * i;
     };
     return fact;
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
