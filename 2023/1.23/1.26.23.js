
// given n, find the perfect square nearest to n. It can be greater or less than n

function nearestSq(n){
    let possibles = []
    for(i=0; i < n + 1; i++ ){
      if(Math.pow(i,2) < n){
      possibles.push(Math.pow(i,2))
        }else if (Math.pow(i,2) === n )  {
          return n
        }else if(Math.pow(i,2) > n ){
          possibles.push(Math.pow(i,2))
          break;
        }
    }
    let distance = 99999,
        curr,
        num;
        
    
    for(i=0; i< possibles.length; i++){
        curr = Math.abs(n - possibles[i])
        if(curr < distance){
          distance = curr;
          num = possibles[i]
          curr = 0
        }
      }
    return num
    }