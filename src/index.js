module.exports = function getZerosCount(number, base) {
  if (1 > number || number > 100000000) throw new Error({error: 'Enter a number from 1 to 100000000'});

  let factors = [];
  let currentRemainder = base;

  for (let i = 2; i <= currentRemainder; i++) { // finding the factors of the base
    while (currentRemainder % i === 0) {
        factors.push(i);
        currentRemainder = currentRemainder / i;
    }
  }

  let uniqueFactors = []; // array of unique factors
  let uniqueExponents = []; // array of exponents of factors

  for (let i = 0; i < factors.length; i++) { // finding the unique factors
    if (uniqueFactors.indexOf(factors[i]) === -1) {
      uniqueFactors.push(factors[i]);
    }
  }

  let counterOfExp = 1;

  factors.forEach((factor, index) => {     // finding the exponents of factors
    if (factor === factors[index + 1]) {
      counterOfExp++;
    } else if (factor) {
      uniqueExponents.push(counterOfExp);
      counterOfExp = 1;
    } else {
      uniqueExponents.push(counterOfExp);
      uniqueExponents.push(1);
    }
  })

  let countersForCompare = [];

  uniqueFactors.forEach((factor, index) => {   // counting how many times number contains the factor
    let currFactor = factor;
    let counter = Math.floor(number / currFactor);
    let currentCount = counter;
    let exponent = uniqueExponents[index] || 1;
    
    while (currentCount >= currFactor) {
      currentCount = currentCount / currFactor; 
      counter = counter + Math.floor(currentCount);
    } 
    countersForCompare.push(Math.floor(counter / exponent)); // pushing result to the array for compare
  })

  countersForCompare.sort((a, b) => b - a);

  return countersForCompare.pop(); // returning of min result
}