// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //count holds the number of times a number occurs in Array A
      let count = 0;
      
    //Nested loops compare each array element to every other element.
      for (i = 0; i < A.length; i++) {
        for (j = 0; j < A.length; j++) {
         
    // if the element in both arrays match, count it as an instance       
          if (A[i] === A[j]) {
            count++
          }
        }
        //at the completion of each inner loop:
        // if a number has an odd amount of occurences, return that number 
        if ((count) % 2 !== 0) {
          return A[i];
        
        //if not, set count back to zero continue on outer loop to test the next array element
        } else {
          count = 0;
        }
      }
    }