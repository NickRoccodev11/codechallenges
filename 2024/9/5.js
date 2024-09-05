//Max Profit 2: now you can buy and sell multiple times, but you can only hold one share at a time
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProf = 0;
  for(let i =0; i < prices.length; i++){
      if(prices[i] < prices[i+1]){
          maxProf += prices[i+1] - prices[i]
      }
  }
  return maxProf
  };