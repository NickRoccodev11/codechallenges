// flatten out a 2d array and return the single array sorted in ascending



"use strict";

function flattenAndSort(array) {
  let flat = []
for(var i=0; i < array.length; i++ ){
  for(var j=0; j < array[i].length; j++ ){
    flat.push(array[i][j])
      }
    }
   return flat.sort((a,b)=>a-b);
}