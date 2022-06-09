// You're given an array of positive integers arr, and an array guide of the same length. 
// Sort array arr using array guide by the following rules:

// if guide[i] = -1, arr[i] shouldn't be sorted;
// if guide[i] ≠ -1, arr[i] should be sorted, 
//      and among all elements that should be sorted, 
//      arr[i] should be the ith one (1-based).


function sortByGuide(arr, guide) {
    let resultArr = []
     let toOrder = []
     let orderNum = []
     for (i = 0; i < guide.length; i++) {
         if (guide[i] === -1) {
             resultArr.push(arr[i])
         } else {
             resultArr.push("x");
             toOrder.push(arr[i])
             orderNum.push(guide[i])
         }
     }
     const keys = Array.from(orderNum.keys()).sort((a, b) => orderNum[a] - orderNum[b])
     const sortedNums = keys.map(i => toOrder[i])
     let count = 0
 
     for (i = 0; i < resultArr.length; i++) {
         if (resultArr[i] === "x") {
             resultArr[i] = sortedNums[count];
             count++;
         }
     }
     return resultArr
   
 }