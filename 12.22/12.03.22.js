
// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. Each character in stones is a type of stone you have.
//  You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.



//First attempt, poor time complexity
// const howManyJewels = (jewels, stones) => {
//     let jList = jewels.split(""),
//         total = 0;
//     stones.split('').forEach(char => jList.includes(char) ? total++ : false);
//     return total
// }



// using a set
const howManyJewels1 = (jewels, stones) => {
    let jSet = new Set(jewels),
        total = 0;
        for(i=0; i < stones.length; i++){
            if (jSet.has(stones[i])){
                total++
            }
        }
    return total
    }

    // using a hash map
    const howManyJewels = (jewels, stones) => {
        let jMap ={}
            total = 0;
            for(char of jewels){
                if(!jMap[char]){
                    jMap[char] = char
                }
            }

            for(i=0; i < stones.length; i++){
                if (jMap[stones[i]]){
                    total++
                }
            }
        return total
        }



    log(howManyJewels("aA", "aAAbbbb"), 3)
    log(howManyJewels("z", "ZZ"), 0)
    log(howManyJewels("aBc", "aAbBccC"), 4)