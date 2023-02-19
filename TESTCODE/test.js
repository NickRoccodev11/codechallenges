const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countVegetables(string) {
    let list = string.split(" ")

    let veg = {
        cabbage: 0,
        carrot: 0,
        celery: 0,
        cucumber: 0,
        mushroom: 0,
        onion: 0,
        pepper: 0,
        potato: 0,
        tofu: 0,
        turnip: 0
    }
    for (veggie of list) {
        if (veg[veggie] || veg[veggie] === 0) {
            veg[veggie]++
        }
    }
    let answer = []
    for (entry in veg) {
        if (veg[entry] > 0) {
            answer.push([veg[entry], entry])
        }
    }
    answer.sort((a,b)=> a[1].localeCompare(b[1]) *-1 )

    return answer.sort((a,b)=> b[0] - a[0])
}
log(countVegetables("turnip turnip turnip turnip turnip turnip cabbage carrot onion pepper tofu dog whisker liquor turnip turnip cabbage cabbage cababge carrot cucumber cucumber cucumber cucumber cucumber cucumber cucumber cucumber cucumber cucumber cucumber pepper pepper pepper pepper onion"))


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
