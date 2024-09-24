/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */ 

//SOLUTION WORKS but too slow, how can it be improved? 

var canCompleteCircuit = function(gas, cost) {
  let tank = 0;
  let route = 0;
  for(let i = 0 ; i < gas.length; i ++){
    let j = i;
    while( tank >= 0){
      tank += gas[j] - cost[j];
      if( tank >= 0){
        route++;
      }else{
        tank = 0;
        route = 0;
        break;
      }
      if(j == gas.length-1){
        j = 0;
      }else{
        j++;
      }
      if(route == gas.length){
        return i
      }
    }
  } 
  return -1
}