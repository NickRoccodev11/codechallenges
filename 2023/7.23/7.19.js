//  SUBSTRING METHOD


let stringy = "abcdefghijklmnopqrstuvwxyz"
                  

console.log(stringy.substring(2, 10))//cdefghij   => notice index 10 is not included
console.log(stringy.substring(2, 0))//ab   => notice we only get indeces 0 and 1
console.log(stringy.substring(4,1))//bcd => If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
console.log(stringy.substring(-1,1))//a  => numbers less than zero are treated as zero
console.log(stringy.substring(0))//abcdefghijklmnopqrstuvwxyz => no second arg means go to end