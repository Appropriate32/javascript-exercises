const getTheTitles = function(objsArray) {
    let titleArray = [];
     objsArray.forEach((element, index) => {
         titleArray[index] = element.title;
     });
     return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
