
// find the only number with no copies in an odd-length Array
// [2,2,2,2,5,2] => 5 (return a number)

function stray(numbers) {
    numbers.sort((a,b)=> a-b);
     return numbers[0] === numbers[1] ? numbers[numbers.length-1] : numbers[0]
    }

    //alternative:

const stray2 = (numbers) => parseInt(numbers.filter((num,idx,arr) =>  arr.indexOf(num) 
 === arr.lastIndexOf(num)).join('')) 