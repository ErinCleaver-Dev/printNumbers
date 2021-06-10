const printNumbers = (num) => {
    let numbers = "";
    if(num < 1 || num > 150) {
      return "Not within a given range"
    } else {
      for(let i = 1; i <= num; i++) {
        numbers+=i;
      }
    }
    return numbers;
  }
  

  module.exports =printNumbers;