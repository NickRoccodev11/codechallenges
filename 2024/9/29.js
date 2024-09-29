function nonConstructibleChange(coins) {
  // return smallest amout of change you can't make
  coins.sort((a,b)=>a-b);
  let change = 0;

  for(let i = 0; i < coins.length; i++){
    if(coins[i] <= (change +1)){
      change  += coins[i];
    }else{
      return change + 1
    }
  }
  return change + 1
}


