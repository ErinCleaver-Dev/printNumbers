const printNumbers = (num) => {
    let numbers = "";
    if(isNaN(num)) {
      return "The value must be a number"
    }else if(num < 1 || num > 150) {
      return "Not within a given range"
    } else {
      for(let i = 1; i <= num; i++) {
        numbers+=i;
      }
    }
    return numbers;
  }
  

  module.exports =printNumbers;