
// Fizzbuzz 1 indexed, to string



var fizzBuzz = function(n) {
    let answer = []
    for(i = 1; i <= n; i++){
        if (i  % 3 === 0 && i % 5 !== 0 ){
            answer.push("Fizz")
        }else if(i % 5 === 0 && i % 3 !== 0  ){
            answer.push("Buzz")
        }else if (i  % 3 === 0 && i % 5 === 0 ){
            answer.push("FizzBuzz")
        }else{
            answer.push(i.toString())
        }
    }
    return answer
};
