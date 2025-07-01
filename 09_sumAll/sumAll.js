const sumAll = function(firstNum, secondNum) {
    let total = 0;
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
       return 'ERROR'
    }
    if (firstNum < 0 || secondNum < 0) {
        return 'ERROR'
    }
    if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i ++) {
            total += i;
        }
    } else if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            total += i;
        }
    }
   
    return total;
};

// Do not edit below this line
module.exports = sumAll;
