const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const greedy = (owed) => {
    // 25,10, 5
    let payout = 0,
        coins = 0;

    while (payout < owed) {
        if (owed - payout >= 25) {
            payout += 25
            coins++
        } else if (owed - payout >= 10) {
            payout += 10
            coins++
        } else {
            payout += 5
            coins++
        }
    }
    return coins
}

// what if coin values are 1,6, 10?

const unGreedy = (owed) => {
    // 1,6,10
    let payout = 0,
        coinArr = [],
        compare = [1, 6, 10];

    coinArr.push(owed)

    let sixes = Math.floor(owed / 6),
        sixLeftovr = owed % 6,
        sixChoices = [];
    for (i = 0; i < compare.length; i++) {
        if ((sixLeftovr / compare[i]) % 1 === 0) {
            sixChoices.push(sixLeftovr / compare[i])
        }
    }
    coinArr.push(sixes + Math.min(...sixChoices))
    let tens = Math.floor(owed / 10),
        tenLeftovr = owed % 10;
        log(tenLeftovr + "leftover")
      let  tenChoices = [];
    for (i = 0; i < compare.length; i++) {
        if ((tenLeftovr / compare[i]) % 1 === 0) {
            tenChoices.push(tenLeftovr / compare[i])
        }
    }
    coinArr.push(tens + Math.min(...tenChoices))
    return Math.min(...coinArr)

}





log(unGreedy(12))
log(unGreedy(20))
log(unGreedy(22))
log(unGreedy(18))
log(unGreedy(19))



// - 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
