const findTheOldest = function(peopleArray) {
      peopleArray.sort((a , b) => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      let ageOfB = (b.yearOfDeath ?? currentYear) - b.yearOfBirth;
      let ageOfA = (a.yearOfDeath ?? currentYear) - a.yearOfBirth;
      
      return ageOfB - ageOfA;
      })
      return peopleArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
