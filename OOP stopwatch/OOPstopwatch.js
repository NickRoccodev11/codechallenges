
let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function timeElapsedSince(date) {
    const c = new Date()
    return Math.ceil(Math.abs(c.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

function howMuchFartherAway(date1, date2) {
    let timeElapsedsince1 = timeElapsedSince(date1)
    let timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    if (timeElapsedsince1 * 2 <= timeElapsedsince2) {
        return `If you thought ${date1String} was a long wait, wait until you see how long it is until ${date2String}.`
    } else if (timeElapsedsince1 < timeElapsedsince2) {
        return `Don't worry, ${date2String} isn't too much farther away than ${date1String} in the scheme of things.`
    } else if (date1String === date2String) {
        return `They're the same number of days away!`
    } else {
        return `You know ${date1String} is closer, right?`
    }
}
// log(howMuchFartherAway(new Date(2034, 09, 26), new Date(2034, 10, 26)))

function howManyTimesFarther(time1, time2) {
    return Math.floor(time1 / time2)
}

function howManyTimesFartherAway(date1, date2) {

    const timeElapsedsince1 = timeElapsedSince(date1)
    const timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    if (timeElapsedsince1 < timeElapsedsince2) {
        return `Looks like ${date2String} is ${howManyTimesFarther(timeElapsedsince2, timeElapsedsince1)} times farther away than ${date1String}.`
    } else if (timeElapsedsince1 === timeElapsedsince2) {
        return `Same exact date there, mate.`
    } else {
        return `Looks like ${date1String} is ${howManyTimesFarther(timeElapsedsince1, timeElapsedsince2)} times farther away than ${date2String}.`
    }
}
log(howManyTimesFartherAway(new Date(2055,12,20), new Date(2034,04,19)))
function daysBetween(day1, day2) {
    return Math.abs(day1 - day2)
}

function totalDaysLeftUntil(date1, date2) {
    const c = new Date()
    const timeElapsedsince1 = timeElapsedSince(date1)
    const timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    return `You have ${timeElapsedsince1} days left until ${date1String}, and ${timeElapsedsince2} days left until ${date2String}. There are ${daysBetween(timeElapsedsince2,timeElapsedsince1)} days between them.`
}
log(totalDaysLeftUntil(new Date(2055,12,20), new Date(2034,04,19)))
// feel free to plug these example dates into your functions
// const dateA = new Date(2022,09,26)
// const dateB = new Date(2022,11,25)


///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
