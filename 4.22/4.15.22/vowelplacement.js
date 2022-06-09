
// We want to know the index of the vowels in a given word, 
// for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


function vowelIndices(word){
    let vowelIndex = []
    let vowels = "aeiouyAEIOUY"
    for(i=0;i<word.length;i++){
        if(vowels.includes(word[i])){
            vowelIndex.push(i+1)
        }
    }
    return vowelIndex
    }