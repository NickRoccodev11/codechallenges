// Freestyle Sparring
// Take turns remixing and refactoring others code through Kumite
// CAREER
// Opportunities
// Find your next career challenge – powered by Qualified Jobs
// COMMUNITY
// Leaderboards
// Achieve honor and move up the global leaderboards
// Chat
// Join our Discord server and chat with your fellow code warriors
// Discussions
// View our Github Discussions board to discuss general Codewars topics
// ABOUT
// Docs
// Learn about all of the different aspects of Codewars
// jazz_whiz Avatar
// 4 kyu
// 779
// 6 kyu
// Sum two arrays
// 812484% of 4891,437 of 2,654ggwilliams
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

// The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.



function addArrays(array1, array2) {
    let array1StringTotal = "",
        array2StringTotal = "";
    for (i = 0; i < array1.length; i++) {
        array1StringTotal += array1[i].toString()
    }
    for (i = 0; i < array2.length; i++) {
        array2StringTotal += array2[i].toString()
    }
    let total = parseInt(array1StringTotal) + parseInt(array2StringTotal);
    let answer = [],
        totalString = total.toString(),
        stringJoiner = ""
    for (i = 0; i < totalString.length; i++) {
        if (totalString[i] === "-") {
            stringJoiner = totalString[i] + totalString[i + 1]
            answer.push(parseInt(stringJoiner))
            i++
        } else {
            answer.push(parseInt(totalString[i]))
        }
    }
    return answer
}