
// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

//  MY PLAN:

// save num as a string
// traverse the string by steps of k
// with each step, reassign a current variable which acts as divisor
//test it against num
// if it passes, increment a "K-beauty" variable
// return kbeauty