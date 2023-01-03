// You will be given an array of strings and your task is to 
// remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccadilly","hubbubbubboo"]),['codewars','picadilly','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])


const dup = (arr) =>  arr.map(string => string.split('').filter((letter, index, array) => letter !== array[index - 1]).join(''))

log(dup(["abracadabra", "allottee", "assessee"]))
log(dup(["kelless", "keenness"]))
log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccadilly", "hubbubbubboo"]))


