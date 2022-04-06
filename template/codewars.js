const log = console.log
// let arr1 = [1, 2, 4, 6, 8, 2, 1];
// let arr2 = [3, 5, 7, 8, 4];

// function arrayDoubles(a1, a2) {
//     filteredList=[]
//     for (i = 0; i < a1.length; i++) {
//         for (j = 0; j < a2.length; j++) {
//             if (a1[i] === a2[j]) {
//                 filteredList.push(a1[i])
//             }
//         }
//     }
//  let answer=[]
//     a1.filter(element=> {
//     for(i=0;i<filteredList.length; i++){
//        if(element!==filteredList[i]){
//            return element
//        }
//        }
//     }
// )
// console.log(filteredList)
// return answer
// }


// console.log(arrayDoubles(arr1, arr2))


// let examp = "WhEoJfjjF"
// //[0,2,4,8]

// function capFinder(str) {
//     let capArray = []
//     for (i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             capArray.push(str.indexOf(str[i]))
//         }
//     }
//     return capArray
// }
// capFinder(examp)

// function charGrouper(str) {
//     let grouped = []
//     let optionalUnderscore = "_"
//     if (str.length % 2 !== 0) {
//         let evenstr = str.concat(optionalUnderscore)
//         for (i = 0; i < evenstr.length; i += 2) {
//             let group = evenstr[i].concat(evenstr[i + 1])
//             grouped.push(group)
//         }
//        return grouped
//     } else {
//         for (i = 0; i < str.length; i += 2) {
//             let group = str[i].concat(str[i + 1])
//             grouped.push(group)
//         }
//         return grouped
//     }
// }
// let frog = "abcdefgjjhsgjohi"
// // log(charGrouper(frog))

// function doubler(arr){
//    let newArr=  arr.map(element=> element+=element)
//    return newArr
// }
// let frog= [1,2,3,4,5]
// console.log(doubler(frog))
// 

// console.log("hi")
// let sadFace = {
// face: "sad",
// isSad: true,
// frown: function(){
//    console.log(":(")
// }

// }

// function findMultiples(integer, limit) {


// }
// log(findMultiples(2,6))


function turn(position, destination) {

   if ((position === "N" && destination === "E") ||
      (position === "E" && destination === "S") ||
      (position === "S" && destination === "W") ||
      (position === "W" && destination === "N")) {
      return "right"
   } return "left"
}

log(turn("E", "S"),
   turn("S", "E"),
   turn("N", "E"),
   turn("E", "N"))