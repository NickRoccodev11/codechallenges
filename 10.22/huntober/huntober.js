const log= console.log
// // huntober string challenge day one 
// const log = console.log

// let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// let charArr = ["O", "I", "Z", "E", "h", "S", "G", "L", "B", "q"]

// function decoder(strng) {
//     let decoded = "",
//         arrIndex = 0;
//     for (i = 0; i < strng.length; i++) {
//         if (numArr.indexOf(strng[i]) !== -1) {
//             arrIndex = numArr.indexOf(strng[i])
//             decoded += charArr[arrIndex]
//         } else if (charArr.indexOf(strng[i]) !== -1) {
//             arrIndex = charArr.indexOf(strng[i])
//             decoded += numArr[arrIndex]
//         } else {
//             decoded += strng[i]
//         }
//     }
//     return decoded
// }
// // log(decoder("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))
// // e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs
// // e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs


// // day 2
// // remove all the text up till (and including) the first occurrence of "c" follow instructions to end up with clue word

// function catType(strng) {
//     let cleanedUp = ""

//     for (i = 0; i < strng.length; i++) {
//         if (strng[i] === "c") {
//             cleanedUp = strng.split("").slice(i + 1).join("")
//             break;
//         }
//     }

//     let removeAndFlip = cleanedUp.replaceAll("Eek!", "").split('').reverse('').join('')

//     let splitByV = removeAndFlip.split('v')

//     let message = "";
//     for (i = 0; i < splitByV.length; i++) {
//         message += splitByV[i][0]
//     }

//     return message.slice(1)
// }

// // clue word is "Space"
// // log(catType("af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"))

// //day 3
// //use the answer from yesterday as keys. 
// // if your input string contains a key, replace it with an empty space

// function replace(strng) {
//     let keyChars = ["S", "p", "a", "c", "e"],
//         newString = "",
//         portion = ""
//     for (i = 0; i < strng.length; i++) {
//         if (keyChars.includes(strng[i])) {
//             portion = strng.replace(strng[i], " ")
//             newString += portion.slice(newString.length, i + 1)
//         } else if (i === strng.length - 1) {
//             portion = portion.split(" ")
//             newString += portion[portion.length - 1]
//         }
//     }

//     return newString
// }

// // log(replace("e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs"))
// // !!1gv)t llt8 vbdeDHEdVw!00t1#A .2MDuLWY P^VVjDch1Sllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs
// // !!1gv)t llt8 vbdeDHEdVw!00t1#A .2MDuLWY P^VVjDch1Sllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs
// // day4
// // reverse a string while preserving all white space ad characters

// function stringReverse(strng){
//     return strng.split('').reverse().join('')
// }

// // log(stringReverse(" !!1gv)t llt8 vbdeDHEdVw!00t1#A .2MDuLWY P^VVjDch1Sllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs"))
// // sfQmg4ly#viOS1hcDjVV^PpYWLuDM2.aA#1t00!wVdEHDedbvc8tllS1hcDjVV^P YWLuDM2. A#1t00!wVdEHDedbv 8tll t)vg1!!

// // day 5
// // several limitations placed on a list of cat puns. return the length of final list

// let list = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// function submissions(strng) {
//     let collection = strng.split(",")
//     let noWhiteSpace = collection.filter(el => el === el.trim())
//     let noDogs = []
//     for (i = 0; i < noWhiteSpace.length; i++) {
//         if (noWhiteSpace[i].toLowerCase().includes("dog") ||
//             noWhiteSpace[i].toLowerCase().includes("bark") ||
//             noWhiteSpace[i].toLowerCase().includes("bone")
//         ) {
//             false
//         } else {
//             noDogs.push(noWhiteSpace[i])
//         }
//     }
//     let noMultis = noDogs.filter(el => el.length % 5 !== 0)
//     let oddSum = [];
//     for (i = 0; i < noMultis.length; i++) {
//         if ((noMultis[i].charCodeAt(noMultis[i][0]) +
//             noMultis[i].charCodeAt(noMultis[i][noMultis[i].length - 1])) % 3 === 0) {
//             oddSum.push(noMultis[i])
//         }
//     }

//     let noEs = []
//     let discarded = []
//     for (i = 0; i < noMultis.length; i++) {
//         if (noMultis[i].length % 2 === 0) {
//             if (noMultis[i][Math.floor(noMultis[i].length / 2)] !== "e") {
//                 noEs.push(noMultis[i])
//             } else if (noMultis[i].length % 3 === 0) {
//                 if (noMultis[i][Math.floor(noMultis[i].length / 2 + 1)] !== "e") {
//                     noEs.push(noMultis[i])
//                 }
//             }
//         }
//     }
//     let capCount = 0;
//     let twoCaps = []

//     for (i = 0; i < noEs.length; i++) {
//         for (j = 0; j < noEs[i].length; j++) {
//             if (noEs[i][j] === noEs[i][j].toUpperCase()) {
//                 capCount++
//             }
//         }
//         if (capCount >= 2) {
//             twoCaps.push(noEs[i])
//             capCount = 0
//         }
//     }

//     let noS = []
//     for(i=0;i< twoCaps.length; i++){
//         if(!twoCaps[i].includes("S")){
//             noS.push(twoCaps[i])
//         }
//     }

//     return noS.length 
// }
// // log(submissions(list))
// // sfQmg4ly#viOS1hcDjVV^PpYWLuDM2.aA#1t00!wVdEHDedbvc8tllS1hcDjVV^P YWLuDM2. A#1t00!wVdEHDedbv 8tll t)vg1!!

// // day 6 
// // remove chars at nth index


// function charRemover(strng, num) {
//     let cleanString = "";
//     for (i = 0; i < strng.length; i++) {
//         if ((i + 1) % num !== 0){
//             cleanString += strng[i]
//         } 
//     }
//     return cleanString
// }

// // log(charRemover("sfQmg4ly#viOS1hcDjVV^PpYWLuDM2.aA#1t00!wVdEHDedbvc8tllS1hcDjVV^P YWLuDM2. A#1t00!wVdEHDedbv 8tll t)vg1!! ", 11))

//  const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"


// //  day 7
// //  switch upper for lower case and direction (a becomes z Etc..)

// function switcher(strng) {
//     let alphabet = "zyxwvutsrqponmlkjihgfedcba"
//     let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let switchedMsg = ''
//     for (i = 0; i < strng.length; i++) {
//         if (alphabet.indexOf(strng[i]) !== -1) {
//             switchedMsg += ALPHABET[alphabet.indexOf(strng[i])]
//         } else if (ALPHABET.indexOf(strng[i]) !== -1) {
//             switchedMsg += alphabet[ALPHABET.indexOf(strng[i])]
//         } else {
//             switchedMsg += strng[i]
//         }
//     }
//     return switchedMsg
// }

// log(switcher("sfQmg4ly#vOS1h

// //issue most likely with the cat list, the number passed in is not 11 




// WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2

// WEEK 2 DAY 1

//compare two array to see if their contents are equal
// each array will have the same number of internal arrays, 
// and the same number of primitive types within those arrays

const arr1 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
const arr2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
const arr3 = [['a', 'B', 'c'], ['d', 'E', 'f'], ['g', 'H', 'i']]
const arr4 = [['a', 'b', 'c'], ['g', 'h', 'i'], ['d', 'e', 'f']]

function arrayCompare(array1, array2) {

    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array1[i].length; j++) {
            if (array1[i][j] !== array2[i][j]) {
                return false
            }
        }
    }
    return true
}
// log(arrayCompare(arr1, arr2))

// DAY 2 ARRAYS  DAY 2 ARRAYS
// I need twin functions, a function that swaps a given primitive value in a given 
// 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function. Scandalous, I know

myArray = ['abc', 'xyz', 1, 2, 'Hey!']


function moveLeft(arr, el) {
    let placeHolder,
        startingIndex = arr.indexOf(el),
        finishIndex = arr.indexOf(arr[arr.indexOf(el) - 1]);

    if (startingIndex > 0) {
        placeHolder = arr[finishIndex];
        arr[finishIndex] = arr[startingIndex];
        arr[startingIndex] = placeHolder
    }
    return arr
}

function moveRight(arr, el) {
    let placeHolder,
        startingIndex = arr.indexOf(el),
        finishIndex = arr.indexOf(arr[arr.indexOf(el) + 1]);

    if (startingIndex < arr.length - 1) {
        placeHolder = arr[finishIndex];
        arr[finishIndex] = arr[startingIndex];
        arr[startingIndex] = placeHolder
    }
    return arr
}

// log(moveLeft(myArray, 'xyz'))
// log(moveRight(myArray, 'Hey!'))