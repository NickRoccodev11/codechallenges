// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
    if(n===1){
        return 1
    }else if ( n===2){
        return 2
    }
    let prev = 2
    let prev2 = 1
    let total = 0 
    for(i=3; i<=n; i++ ){
         total= prev + prev2;
         prev2 = prev;
         prev = total    
    }
    return total
};
