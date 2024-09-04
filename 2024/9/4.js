/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProf = 0;
  for(let i =0; i < prices.length; i++){
   for(let j = i+1; j < prices.length; j++){
       if(prices[j] - prices[i] > maxProf){
           maxProf = prices[j] - prices[i]
       }
   }
  }
  return maxProf
};

// how about without a nested loop?
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  let maxProf = 0;
  let minPrice = Infinity; 
  for(let i = 0; i < prices.length; i++){
    if(prices[i] < minPrice){
        minPrice = prices[i];
    }
    if(prices[i] - minPrice > maxProf){
        maxProf = prices[i] - minPrice
    }
  }
 return maxProf
};