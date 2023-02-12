// Write a program that outputs the top n elements from a list.




function largest(n, array) {

    let biggest = [];
    
    while(biggest.length < n){
     currB = Math.max(...array)
      biggest.push(currB)
      array.splice(array.indexOf(currB), 1)
    }
    
    return biggest.reverse();
  }