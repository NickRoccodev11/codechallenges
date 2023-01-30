const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function (s, numRows) {
    let zig =[]
    for(i=0; i<numRows; i++){
       zig.push([])
     };
 
     let row = 0,
     column = 0,
     descending = true;
 
     for(i=0; i< s.length; i++){
         if(descending){
             if(row < numRows ){
                 zig[row][column] = s[i]
                 row++;
             }else{
                 descending = false;
                 column++;
                 row--;
                 i--;
             }
         }else if (row > 0){
              row--;
             zig[row][column]=s[i];
             row !== 0 ? column++ : null
             row === 1 ? row = 0 : null
         }else{
             descending = true; 
             i--;
 
         }
     }
     log(zig)
     let finalStatement= ""
 for(i=0; i<zig.length; i++){
     for(j=0; j<zig[i].length; j++){
         if(zig[i][j]!==undefined){
             finalStatement+= zig[i][j]
         }
     }
 }
 return finalStatement
 };

 log(convert("ABCD",2), "ACBD")
 
 // rows = 0 
 // if(letter){
 //     zig[i][0] = 
 //     rows++
 // }
 
 // rows; 5 word: dangl e b e rrysw i s h
 // [
 //     [D, "", "", "", R, "", "",""],
 //     [A, "", "", E,  R, "" ,"", H],
 //     [N, "", B, "",  Y, "", S, ""],
 //     [G, E, "", "",  S,  I,"", ""],
 //     [L,"", "", "",  W, "","", ""]
 // ]
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
