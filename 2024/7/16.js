// algoexpert "Minimum waiting time"

function minimumWaitingTime(queries) {
  queries.sort((a,b)=> a - b )
  let total= 0;
  for(let i = 0; i < queries.length; i++){
    let queriesLeft = queries.length - (i + 1); 
    total += queries[i] * queriesLeft
  }
  return total
}
// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
