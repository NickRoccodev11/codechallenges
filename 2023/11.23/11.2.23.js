
//MEMOIZATION

let answered = []

function slowThing(a) {
    if(answered[a]) return answered[a]
    let x = 0
    for (i = 0; i < a; i++) {
        for (j = 0; j < a; j++) {
            for (h = 0; h < a; h++) {
                x+= i+j+h
            }
        }
    }
    answered[a] = x
        return x
}

console.log(slowThing(1000))
console.log(slowThing(1000))
console.log(slowThing(1000))

//the first log takes a few seconds, while thwe other two happen instantaneously- this is because we've stored the answer in our answer array