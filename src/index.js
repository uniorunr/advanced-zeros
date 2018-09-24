module.exports = function getZerosCount(number, base) {
  if (1 <= number && number <= 100000000) {

    var factors = [];
    var currentRemainder = base;

    for (var i = 2; i <= currentRemainder; i++) { // finding the factors of the base
      while (currentRemainder % i === 0) {
          factors.push(i);
          currentRemainder = currentRemainder / i;
      }
    }
    
    var exponent = 1; // default exponent

    for (var n = (factors.length - 1); n > 0; n--) { // finding the exponent of the max factor
      if (factors[n] === factors[n - 1]) {
        exponent = exponent + 1;
      } else break;
    }

    var maxFactor = factors[factors.length - 1];
    var counter = Math.floor(number / maxFactor);
    var currentCount = counter;
    
    while (currentCount >= maxFactor) {
      currentCount = currentCount / maxFactor; // counting how many times number contains the max factor
      counter = counter + Math.floor(currentCount);
    } 

    return Math.floor(counter / exponent); // the count of the max factors divided by the exponent
  
  } else {
    return {error: 'Enter a number from 1 to 100000000'};
  }
}