const log = console.log
// // // huntober string challenge day one 
// // const log = console.log

// // let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// // let charArr = ["O", "I", "Z", "E", "h", "S", "G", "L", "B", "q"]

// // function decoder(strng) {
// //     let decoded = "",
// //         arrIndex = 0;
// //     for (i = 0; i < strng.length; i++) {
// //         if (numArr.indexOf(strng[i]) !== -1) {
// //             arrIndex = numArr.indexOf(strng[i])
// //             decoded += charArr[arrIndex]
// //         } else if (charArr.indexOf(strng[i]) !== -1) {
// //             arrIndex = charArr.indexOf(strng[i])
// //             decoded += numArr[arrIndex]
// //         } else {
// //             decoded += strng[i]
// //         }
// //     }
// //     return decoded
// // }
// // // log(decoder("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))
// // // e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs
// // // e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs


// // // day 2
// // // remove all the text up till (and including) the first occurrence of "c" follow instructions to end up with clue word

// // function catType(strng) {
// //     let cleanedUp = ""

// //     for (i = 0; i < strng.length; i++) {
// //         if (strng[i] === "c") {
// //             cleanedUp = strng.split("").slice(i + 1).join("")
// //             break;
// //         }
// //     }

// //     let removeAndFlip = cleanedUp.replaceAll("Eek!", "").split('').reverse('').join('')

// //     let splitByV = removeAndFlip.split('v')

// //     let message = "";
// //     for (i = 0; i < splitByV.length; i++) {
// //         message += splitByV[i][0]
// //     }

// //     return message.slice(1)
// // }

// // // clue word is "Space"
// // // log(catType("af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"))

// // //day 3
// // //use the answer from yesterday as keys. 
// // // if your input string contains a key, replace it with an empty space

// // function replace(strng) {
// //     let keyChars = ["S", "p", "a", "c", "e"],
// //         newString = "",
// //         portion = ""
// //     for (i = 0; i < strng.length; i++) {
// //         if (keyChars.includes(strng[i])) {
// //             portion = strng.replace(strng[i], " ")
// //             newString += portion.slice(newString.length, i + 1)
// //         } else if (i === strng.length - 1) {
// //             portion = portion.split(" ")
// //             newString += portion[portion.length - 1]
// //         }
// //     }

// //     return newString
// // }

// // // log(replace("e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs"))
// // // !!1gv)t llt8 vbdeDHEdVw!00t1#A .2MDuLWY P^VVjDch1Sllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs
// // // !!1gv)t llt8 vbdeDHEdVw!00t1#A .2MDuLWY P^VVjDch1Sllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs
// // // day4
// // // reverse a string while preserving all white space ad characters

// // function stringReverse(strng){
// //     return strng.split('').reverse().join('')
// // }

// // // log(stringReverse(" !!1gv)t llt8 vbdeDHEdVw!00t1#A .2MDuLWY P^VVjDch1Sllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs"))
// // // sfQmg4ly#viOS1hcDjVV^PpYWLuDM2.aA#1t00!wVdEHDedbvc8tllS1hcDjVV^P YWLuDM2. A#1t00!wVdEHDedbv 8tll t)vg1!!

// // // day 5
// // // several limitations placed on a list of cat puns. return the length of final list

// // let list = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// // function submissions(strng) {
// //     let collection = strng.split(",")
// //     let noWhiteSpace = collection.filter(el => el === el.trim())
// //     let noDogs = []
// //     for (i = 0; i < noWhiteSpace.length; i++) {
// //         if (noWhiteSpace[i].toLowerCase().includes("dog") ||
// //             noWhiteSpace[i].toLowerCase().includes("bark") ||
// //             noWhiteSpace[i].toLowerCase().includes("bone")
// //         ) {
// //             false
// //         } else {
// //             noDogs.push(noWhiteSpace[i])
// //         }
// //     }
// //     let noMultis = noDogs.filter(el => el.length % 5 !== 0)
// //     let oddSum = [];
// //     for (i = 0; i < noMultis.length; i++) {
// //         if ((noMultis[i].charCodeAt(noMultis[i][0]) +
// //             noMultis[i].charCodeAt(noMultis[i][noMultis[i].length - 1])) % 3 === 0) {
// //             oddSum.push(noMultis[i])
// //         }
// //     }

// //     let noEs = []
// //     let discarded = []
// //     for (i = 0; i < noMultis.length; i++) {
// //         if (noMultis[i].length % 2 === 0) {
// //             if (noMultis[i][Math.floor(noMultis[i].length / 2)] !== "e") {
// //                 noEs.push(noMultis[i])
// //             } else if (noMultis[i].length % 3 === 0) {
// //                 if (noMultis[i][Math.floor(noMultis[i].length / 2 + 1)] !== "e") {
// //                     noEs.push(noMultis[i])
// //                 }
// //             }
// //         }
// //     }
// //     let capCount = 0;
// //     let twoCaps = []

// //     for (i = 0; i < noEs.length; i++) {
// //         for (j = 0; j < noEs[i].length; j++) {
// //             if (noEs[i][j] === noEs[i][j].toUpperCase()) {
// //                 capCount++
// //             }
// //         }
// //         if (capCount >= 2) {
// //             twoCaps.push(noEs[i])
// //             capCount = 0
// //         }
// //     }

// //     let noS = []
// //     for(i=0;i< twoCaps.length; i++){
// //         if(!twoCaps[i].includes("S")){
// //             noS.push(twoCaps[i])
// //         }
// //     }

// //     return noS.length 
// // }
// // // log(submissions(list))
// // // sfQmg4ly#viOS1hcDjVV^PpYWLuDM2.aA#1t00!wVdEHDedbvc8tllS1hcDjVV^P YWLuDM2. A#1t00!wVdEHDedbv 8tll t)vg1!!

// // // day 6 
// // // remove chars at nth index


// // function charRemover(strng, num) {
// //     let cleanString = "";
// //     for (i = 0; i < strng.length; i++) {
// //         if ((i + 1) % num !== 0){
// //             cleanString += strng[i]
// //         } 
// //     }
// //     return cleanString
// // }

// // // log(charRemover("sfQmg4ly#viOS1hcDjVV^PpYWLuDM2.aA#1t00!wVdEHDedbvc8tllS1hcDjVV^P YWLuDM2. A#1t00!wVdEHDedbv 8tll t)vg1!! ", 11))

// //  const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"


// // //  day 7
// // //  switch upper for lower case and direction (a becomes z Etc..)

// // function switcher(strng) {
// //     let alphabet = "zyxwvutsrqponmlkjihgfedcba"
// //     let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// //     let switchedMsg = ''
// //     for (i = 0; i < strng.length; i++) {
// //         if (alphabet.indexOf(strng[i]) !== -1) {
// //             switchedMsg += ALPHABET[alphabet.indexOf(strng[i])]
// //         } else if (ALPHABET.indexOf(strng[i]) !== -1) {
// //             switchedMsg += alphabet[ALPHABET.indexOf(strng[i])]
// //         } else {
// //             switchedMsg += strng[i]
// //         }
// //     }
// //     return switchedMsg
// // }

// // log(switcher("sfQmg4ly#vOS1h

// // //issue most likely with the cat list, the number passed in is not 11 




// // WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2

// // WEEK 2 DAY 1

// //compare two array to see if their contents are equal
// // each array will have the same number of internal arrays, 
// // and the same number of primitive types within those arrays

// const arr1 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
// const arr2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
// const arr3 = [['a', 'B', 'c'], ['d', 'E', 'f'], ['g', 'H', 'i']]
// const arr4 = [['a', 'b', 'c'], ['g', 'h', 'i'], ['d', 'e', 'f']]

// function arrayCompare(array1, array2) {

//     for (i = 0; i < array1.length; i++) {
//         for (j = 0; j < array1[i].length; j++) {
//             if (array1[i][j] !== array2[i][j]) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// // log(arrayCompare(arr1, arr2))

// // DAY 2 ARRAYS  DAY 2 ARRAYS
// // I need twin functions, a function that swaps a given primitive value in a given 
// // 1-dimensional array to an index to the left, and another that swaps it to the right.

// // Some things to note:

// // If the given value is on the edge of the array and can't move in that direction, don't move it.
// // The array passed in should be mutated by this function. Scandalous, I know

// myArray = ['abc', 'xyz', 1, 2, 'Hey!']


// function moveLeft(arr, el) {
//     let placeHolder,
//         startingIndex = arr.indexOf(el),
//         finishIndex = arr.indexOf(arr[arr.indexOf(el) - 1]);

//     if (startingIndex > 0) {
//         placeHolder = arr[finishIndex];
//         arr[finishIndex] = arr[startingIndex];
//         arr[startingIndex] = placeHolder
//     }
//     return arr
// }

// function moveRight(arr, el) {
//     let placeHolder,
//         startingIndex = arr.indexOf(el),
//         finishIndex = arr.indexOf(arr[arr.indexOf(el) + 1]);

//     if (startingIndex < arr.length - 1) {
//         placeHolder = arr[finishIndex];
//         arr[finishIndex] = arr[startingIndex];
//         arr[startingIndex] = placeHolder
//     }
//     return arr
// }

// // log(moveLeft(myArray, 'xyz'))
// // log(moveRight(myArray, 'Hey!'))


// // DAY 3 DAY 3 DAY 3 DAY 3 
// // Today I'd like you to write a function that takes in a given array of strings and 
// // move any entries containing the letter 'a' to the front, and then 
// // move any entries that have over 3 characters to the back. 
// // Please preserve the order of things while you do this!

// // myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // // move things around
// // => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']


// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

// function sortAandLength1(arr) {
//     let arr1 = [], arr2 = [], arr3 = [];

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].includes("a")) {
//             arr1.push(arr[i])
//         } else if (arr[i].length > 3) {
//             arr3.push(arr[i])
//         } else {
//             arr2.push(arr[i])
//         }
//     }
//     return arr1.concat(arr2, arr3)
// }

// // sortAandLength(myArr)
// // ALTERNATIVE WITH SORT


// function sortAandLength2(arr) {
//     let newArr = []
//     newArr = arr.sort((a, b) => {
//         if (a.length < 4 && b.length > 3) {
//             return -1
//         } else if (a.length > 3 && b.length < 4) {
//             return 1
//         } else {
//             return 0
//         }
//     })
//     newArr = arr.sort((a, b) => {
//         if (a.includes("a") && !b.includes("a")) {
//             return -1
//         } else if (b.includes("a") && !a.includes("a")) {
//             return 1
//         } else {
//             return 0
//         }
//     })
//     return newArr
// }

// // DAY 4 DAy 4 DAy 4 DAy 4 DAY 4

// // Please write twin functions that each take in a given value
// //  that will only appear once within a given array of a similar structure
// //   to the one described above, which will either move that value up one row or down one 
// //   row in the array, keeping its same horizontal position. It will essentially swap
// //    places with whatever was where it needed to be. Just like in Day 2, don't do anything 
// //    if the given value is already as high or low as it can get.

// // Oh, and go ahead and mutate the given array. We're livin' on the wild side!

// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// function moveUp(arr, el) {

//     let outerIndex,
//         innerIndex,
//         placeHolder;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].includes(el)) {
//             outerIndex = i;
//             innerIndex = arr[i].indexOf(el);
//         }
//     };

//     if (outerIndex === arr.length - 1) {
//         return arr;
//     };

//     placeHolder = arr[outerIndex][innerIndex];
//     arr[outerIndex][innerIndex] = arr[outerIndex + 1][innerIndex];
//     arr[outerIndex + 1][innerIndex] = placeHolder;

//     return arr;
// }
// // log(moveUp(myGrid, "c"))

// function moveDown(arr, el) {

//     let outerIndex,
//         innerIndex,
//         placeHolder;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].includes(el)) {
//             outerIndex = i;
//             innerIndex = arr[i].indexOf(el);
//         }

//     }

//     if (outerIndex === 0) {
//         return arr;
//     }

//     placeHolder = arr[outerIndex][innerIndex];
//     arr[outerIndex][innerIndex] = arr[outerIndex - 1][innerIndex];
//     arr[outerIndex - 1][innerIndex] = placeHolder;

//     return arr
// }
// // log(moveDown(myGrid, "e"))



// // DAY 5 DAy 5 DAY 5 DAy 5

// // Please create a function that will take in an array like we've been working with all week 
// // (X-inner arrays of X-primitive values each) and shuffle it up in place.
// //  Do your best to have a thorough, random shuffle in a single call of your function.


// function randomInPlace(arr) {
//     let placeHolder;
//     let random;
//     for (i = 0; i < arr.length; i++) {
//         random = Math.floor(Math.random() * arr.length )
//         placeHolder = arr[i];
//         arr[i] = arr[random];
//         arr[random] = placeHolder;
//         for (j = 0; j < arr.length; j++) {
//             random = Math.floor(Math.random() * arr.length - 1)
//             placeHolder = arr[i][j];
//             arr[i][j] = arr[i][random];
//             arr[i][random] = placeHolder;
//         }
//     }
//     return arr
// }
// // log(randomInPlace(myGrid))


// WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1

// simplify this:

function myExampleFunction1(arr) {
    if (arr != null) {
        if (arr.length !== 0) {
            if (arr[0].length !== 0) {
                if (arr.length > 10) {
                    arr.push('maximum')
                } else if (arr.length === 10) {
                    arr.push('maximum')
                } else {
                    if (arr[0] === 'must be maximum') {
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') {
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}


let arr1 = ["flexible", "hi"]
let arr2 = ["must be maximum", "hi", "hi"]
let arr3 = ["", 12, "hi"]
let arr4 = ["must be maximum", 12, "hi", 1, 1, 1, 1, 1, 1, 1]
let arr5 = ["must be maximum", 12, "hi", 1, 1, 1, 1, 1, 1, 1, "eleventh"]
let arr6 = []
let arr7 = null


//simplified: 
let myExampleFunction = arr => {
    if (arr === null || arr.length === 0 || arr[0].length === 0) return arr;
    if (arr.length >= 10) {
        arr.push("maximum");
        return arr;
    } else if (arr[0] !== "must be maximum" && arr[0] !== "flexible") {
        return arr;
    }
    arr[0] === "flexible" ? arr.push("success") : arr.push("failure")
    return arr
}

// log(myExampleFunction(arr1), '["flexible","hi", "success"]')
// log(myExampleFunction(arr2), '["must be maximum","hi","hi","failure"]')
// log(myExampleFunction(arr3), '["", 12,"hi"]')
// log(myExampleFunction(arr4), '["must be maximum", 12, "hi",1,1,1,1,1,1,1, "max"]')
// log(myExampleFunction(arr5), '["must be maximum", 12, "hi", 1, 1, 1, 1, 1, 1, 1,"eleventh","max"]')
// log(myExampleFunction(arr6), '[]')
// log(myExampleFunction(arr7), 'null')

// CLEAN UP THIS CODE: 

function comp1(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
    const as = a.toDateString()
    const bs = b.toDateString()
    if (da * 2 <= db) {
        return `If you thought ${as} was a long wait, wait until you see how long it is until ${bs}.`
    } else if (da < db) {
        return `Don't worry, ${bs} isn't too much farther away than ${as} in the scheme of things.`
    } else if (da === db) {
        return `They're the same number of days away!`
    } else {
        return `You know ${as} is closer, right?`
    }
}

function comp2(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
    const as = a.toDateString()
    const bs = b.toDateString()
    if (da < db) {
        const x = Math.floor(db / da)
        return `Looks like ${bs} is ${x} times farther away than ${as}.`
    } else if (da === db) {
        return `Same exact date there, mate.`
    } else {
        const x = Math.floor(da / db)
        return `Looks like ${as} is ${x} times farther away than ${bs}.`
    }
}

function tot(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
    const as = a.toDateString()
    const bs = b.toDateString()
    const x = db - da
    return `You have ${da} days left until ${as}, and ${db} days left until ${bs}. There are ${x} days between them.`
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022, 09, 26)
const dateB = new Date(2022, 11, 25)

//MY ANSWER:


function timeElapsedSince(date) {
    const c = new Date()
    return Math.ceil(Math.abs(c.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

function howMuchFartherAway(date1, date2) {
    let timeElapsedsince1 = timeElapsedSince(date1)
    let timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    if (timeElapsedsince1 * 2 <= timeElapsedsince2) {
        return `If you thought ${date1String} was a long wait, wait until you see how long it is until ${date2String}.`
    } else if (timeElapsedsince1 < timeElapsedsince2) {
        return `Don't worry, ${date2String} isn't too much farther away than ${date1String} in the scheme of things.`
    } else if (date1String === date2String) {
        return `They're the same number of days away!`
    } else {
        return `You know ${date1String} is closer, right?`
    }
}
// log(howMuchFartherAway(new Date(2034, 09, 26), new Date(2034, 10, 26)))

function howManyTimesFarther(time1, time2) {
    return Math.floor(time1 / time2)
}

function howManyTimesFartherAway(date1, date2) {

    const timeElapsedsince1 = timeElapsedSince(date1)
    const timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    if (timeElapsedsince1 < timeElapsedsince2) {
        return `Looks like ${date2String} is ${howManyTimesFarther(timeElapsedsince2, timeElapsedsince1)} times farther away than ${date1String}.`
    } else if (timeElapsedsince1 === timeElapsedsince2) {
        return `Same exact date there, mate.`
    } else {
        return `Looks like ${date1String} is ${howManyTimesFarther(timeElapsedsince1, timeElapsedsince2)} times farther away than ${date2String}.`
    }
}
// log(howManyTimesFartherAway(new Date(2055, 12, 20), new Date(2034, 04, 19)))
function daysBetween(day1, day2) {
    return Math.abs(day1 - day2)
}

function totalDaysLeftUntil(date1, date2) {
    const c = new Date()
    const timeElapsedsince1 = timeElapsedSince(date1)
    const timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    return `You have ${timeElapsedsince1} days left until ${date1String}, and ${timeElapsedsince2} days left until ${date2String}. There are ${daysBetween(timeElapsedsince2, timeElapsedsince1)} days between them.`
}
// log(totalDaysLeftUntil(new Date(2055, 12, 20), new Date(2034, 04, 19)))

// It's the academic year's end, fateful moment of your school report.
//  The averages must be calculated. All the students come to you and entreat 
//  you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr) {
    return Math.floor(arr.reduce((acc, cur) => cur + acc, 0) / arr.length)
}

// log(getAverage([2, 2, 2, 2]))
// log(getAverage([1, 2, 3, 4, 5,]))
// log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))


// // You will be given an array of numbers in which two numbers occur once and
//  the rest occur only twice. Your task will be to return the sum of the numbers 
//  that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 
// 15 because only the numbers 7 and 8 occur once, and their sum is 15.
//  Every other number occurs twice.


// QUADRATIC SOLUTION

function repeats(arr) {
    let total = 0;
    let isDouble = false;

    for (i = 0; i < arr.length; i++) {
        for (k = 0; k < arr.length; k++) {
            if (arr[i] === arr[k] && i !== k) {
                isDouble = true
            }
        }
        if (!isDouble) {
            total += arr[i]
        }
        isDouble = false
    }
    return total
}


//LINEAR SOLUTION


function repeats(arr) {
    let arrMap = {}

    for (num of arr) {
        if (!arrMap[num]) {
            arrMap[num] = 1
        } else {
            arrMap[num]++
        }
    }
    let total = 0;
    for (number of arr) {
        if (arrMap[number] === 1) {
            total += number
        }
    }
    return total

}

//METHODS ANSWER

function repeats(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
        .reduce((a, c) => a + c, 0)
}


// log(
//     repeats([4, 5, 7, 5, 4, 8]),
//     repeats([9, 10, 19, 13, 19, 13]),
//     repeats([16, 0, 11, 4, 8, 16, 0, 11]),
//     repeats([5, 17, 18, 11, 13, 18, 11, 13]),
//     repeats([5, 10, 19, 13, 10, 13])
// )

// log('15,19,12,22,24')

//
// Given an array of digital numbers, return a new array of length number containing the 
// last even numbers from the original array (in the same order).
//  The original array will be not empty and will contain at least "number" even numbers.

// // For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


const lastEvens = (arr, n) => {
    return arr.filter(el => el % 2 === 0).slice(-n)
}

// log(lastEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) //4,6,8
// log(lastEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // [-8,26]
// log(lastEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) // [6]


//
// Return the number of unique arrays that can be formed by picking exactly
//  one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, 
// because it results in only 4 possibilites. 
// They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

let solve = arr => arr.map(subArr => new Set(subArr)).reduce((a, c) => c.size * a, 1)


//OR EVEN...

let solve2 = arr => arr.reduce((a, c) => new Set(c).size * a, 1)


// log(
//     solve2([[1, 2], [4, 4], [5, 6, 6]]),
//     solve2([[1, 2], [4, 4], [5, 6, 6]]),
//     solve2([[1, 2], [3, 4], [5, 6]]),
//     solve2([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]))
// log("4,4,8,72")
//////////////////////////////////////////////////////////////////////////////

// Given an array of integers , Find the Nth smallest element in this array 
// of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

const nthSmallest = (arr, n) => arr.sort((a, b) => a - b)[n - 1]


// log(
//     nthSmallest([3, 1, 2], 2),
//     nthSmallest([15, 20, 7, 10, 4, 3], 3),
//     nthSmallest([15, 20, 7, 10, 4, 3], 3),
//     nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5))


///


// The goal of this exercise is to convert a string to a new string where each
//  character in the new string is "(" if that character appears only once in the
//   original string, or ")" if that character appears more than once in the original
//    string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// NOTE : THIS doesn't work because referencing "str" inside of map refers to str as it was 
// originally passed in, not as it exists currently in the return chain

const parenNo = str => {
    return str.toLowerCase().split('')
        .map(char => str.indexOf(char) === str.lastIndexOf(char) ? "(" : ")").join('')
}

// instead save it to a variable to reference it as a lowercase

const parenClose = str => {
    let arr = str.toLowerCase().split('')
    return arr.map(char => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")").join('')
}

//UPDATE: YOU CAN USE MAP's THIRD PARAMETER : THE ARRAY REFERENCE !

const paren3 = str => str.toLowerCase().split('')
    .map((char, idx, arr) => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")")
    .join('')


// NOW WITH A HASH MAP

const paren = str => {
    let strMap = {};
    for (char of str) {
        if (!strMap[char.toLowerCase()]) {
            strMap[char.toLowerCase()] = 1
        } else {
            strMap[char.toLowerCase()]++
        }
    }
    return str.split('').map(char => strMap[char.toLowerCase()] > 1 ? ")" : "(").join('')
}


// log(paren("din"))
// log(paren("recede"))
// log(paren("Success"))
// log(paren("(( @"))
// log(paren("Bob"))


// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original 
// string by deleting some (can be none) of the characters without disturbing the relative
//  positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "ab", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


function isSub(s, t) {
    if (s.length !== 0 && t.length === 0) {
        return false
    }
    let start = 0;
    for (i = 0; i < s.length; i++) {
        for (j = start; j < t.length; j++) {
            if (s[i] === t[j]) {
                start = j + 1;
                if (j === t.length - 1 && i < s.length - 1) {
                    return false
                }
                break;
            }
            if (j === t.length - 1) {
                return false
            }
        }
    }
    return true
}


// log(isSub("aaaaaa", "bbaaaa"), "false")
// log(isSub("acb", "ahbgdc"), "false")

//
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.


function stockList(listOfArt, listOfCat) {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return ""
    }
    let inStock = {};
    for (i = 0; i < listOfArt.length; i++) {
        if (!inStock[listOfArt[i][0]]) {
            if (listOfCat.includes(listOfArt[i][0])) {
                inStock[listOfArt[i][0]] = parseInt(listOfArt[i].slice(listOfArt[i].indexOf(" ")))
            }
        } else {
            inStock[listOfArt[i][0]] += parseInt(listOfArt[i].slice(listOfArt[i].indexOf(" ")))
        }
    }
    for (i = 0; i < listOfCat.length; i++) {
        if (!inStock[listOfCat[i]]) {
            inStock[listOfCat[i]] = 0
        }
    }
    let codeArr = Object.keys(inStock)
    let stockArr = Object.values(inStock)
    let resArr = []
    for (i = 0; i < listOfCat.length; i++) {

        resArr.push(`(${listOfCat[i]} : ${stockArr[codeArr.indexOf(listOfCat[i])]})`)
    }
    return resArr.join(" - ")
}
log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]))
  //"(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

  // ANOTHER TAKE
//   FROM CODEWARS