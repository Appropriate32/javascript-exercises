const repeatString = function(word, numberTimes) {
     let wordAdd = "";
     for (let i = 0; i < numberTimes; i++) {
        wordAdd += word
     }
     return wordAdd;
};

repeatString("hey", 5)
// Do not edit below this line
module.exports = repeatString;
