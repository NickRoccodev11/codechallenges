// DESCRIPTION:
// For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

// For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :

//  3 =  2*1 +1
//  6 =  2*3
//  13 = 2*6 +1
// Write a function that returns this sequence given a number N. Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prependig the elements to a list.



// n=3
//1,3  /  1 

// n=4
// 1,2,4 /  d d  

//n=5
//1,2,5 / d 1

// n=6
// 1,3,6 /  1 d

// n=7
// 1,3,7 / 1 1

//n=8
//1,2,4,8 / d d d

//n=9
//1,2,4,9 / d d 1

//n=10
//1,2,5,10 / d 1 d

// n=11
// 1,2,5,11 / d 1 1

// n=12
// 1,3,6,12 /  1 d d

// n= 13
// 1, 3, 6, 13 /  1 d 1

// n=14
// 1,3,7,14 / 1 1 d

// n=15
// 1,3,7,15 /  1 1 1


// n= 16
// 1,2,4,8,16 / d d d d

// n=17
//1,2,4,8,17 / d d d 1

// n=18 
//1,2,4,9,18 / d d 1 d

// n=19
// 1,2,4,9,19 / d d 1 1

// n=20
//1,2,5,10,20 /  d 1 d d

// n=21
// 1,2,5,10,21 / d 1 d 1

// n=22
// 1,2,5,11,22 / d 1 1 d

//n=23
//1,2,5,11,23 / d 1 1 1 

// n=24
// 1,3,6,12,24 / 1 d d d

// n=25
//1,3,6,12,25 / 1 d d 1

//Pattern is still evading me, COME BACK TO THIS ONE!