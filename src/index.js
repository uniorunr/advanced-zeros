module.exports = function getZerosCount(number, base) {
  if (1 <= number && number <= 100000000) {

    let factors = [];
    let currentRemainder = base;

    for (let i = 2; i <= currentRemainder; i++) { // finding the factors of the base
      while (currentRemainder % i === 0) {
          factors.push(i);
          currentRemainder = currentRemainder / i;
      }
    }
    
    const factorsLength = factors.length;
    let uniqueFactors = []; // array of unique factors
    let uniqueExponents = []; // array of exponents of factors

    for (let i = 0; i < factorsLength; i++) { // finding the unique factors
      if (uniqueFactors.indexOf(factors[i]) === -1) {
        uniqueFactors.push(factors[i]);
      }
    }

    let counterOfExp = 1;

    for (let i = 0; i < factorsLength; i++) { // finding the exponents of factors
      if (factors[i] === factors[i + 1]) {
        counterOfExp++;
      } else if (factors[i]) {
        uniqueExponents.push(counterOfExp);
        counterOfExp = 1;
      } else {
        uniqueExponents.push(counterOfExp);
        uniqueExponents.push(1);
      }
    }

    let countersForCompare = [];

    for (let i = 0; i < uniqueFactors.length; i++) { // counting how many times number contains the factor
      let factor = uniqueFactors[i];
      let counter = Math.floor(number / factor);
      let currentCount = counter;
      let exponent = uniqueExponents[i] || 1;
      
      while (currentCount >= factor) {
        currentCount = currentCount / factor; 
        counter = counter + Math.floor(currentCount);
      } 
      countersForCompare.push(Math.floor(counter / exponent)); // pushing result to the array for compare
    }

    countersForCompare.sort((a, b) => b - a);
    return countersForCompare[countersForCompare.length - 1]; // returning of min result
  
  } else {
    return {error: 'Enter a number from 1 to 100000000'};
  }
}