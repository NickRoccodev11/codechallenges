





//THIS ANSWER NEEDS TO BE IMPROVED FOR PERFORMANCE!
// Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
// The string's tops are from displaying the string in the below way:

//                                                       3 
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z 
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w 
//                                         v

// The next top is always 1 character higher than the previous one. For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

// When the msg string is empty, return an empty string.
// The input strings may be very long. Make sure your solution has good performance.
// Check the test cases for more samples.

// Note for C++
// Do not post an issue in my solution without checking if your returned string doesn't have some invisible characters. You read most probably outside of msg string.



function tops(msg) {
    let increment = 1,
        factor = 1,
        response = []
    for (var i = 0, len = msg.length; i < len; i++) {
        response.push(msg[i + increment])
        increment += 4 * factor
        factor++
    }

    return response.reverse().join("")
}