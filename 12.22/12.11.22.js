// Given two Arrays in which values are the power of each soldier, return true if you 
// survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array.
//  The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the 
// team with the highest initial attack power.
//  If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.



function hasSurvived(attackers, defenders) {
    let longest = attackers.length >= defenders.length
        ? attackers.length : defenders.length;

    let aS = 0, dS = 0;

    for (i = 0; i < longest; i++) {
        if (attackers[i] > defenders[i] ||
            (attackers[i] && !defenders[i])) {
            aS++
        } else if (attackers[i] < defenders[i] ||
            (!attackers[i] && defenders[i])) {
            dS++
        }
    }

    if (aS === dS) {
        let aTotal = attackers.reduce((a, c) => a + c, 0)
        let dTotal = defenders.reduce((a, c) => a + c, 0)
        return aTotal <= dTotal
    } else {
        return aS < dS
    }
}


// NIM GAME:
// You are playing the following Nim Game with your friend:

// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.
// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.


/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = n => n % 4 === 0 ? false : true


//  to solve:
// walk through test cases to discern pattern

//1  2  3  4  5  6  7  8  9  10  11 12 <== number left

//1  2  3  x  1  2  3  x  1  2   3  x <== take this many to win

// TASK 3
// REVERSE ONLY THE VOWELS OF A STRING!


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let sArr = s.split(''),
        vowels = ["a", "e", "i", "o", "u",
            "A", "E", "I", "O", "U"],
        sVows = []
    sArr.forEach(el => {
        vowels.includes(el) && sVows.push(el)
    });
    log(sVows)
    let answer = sArr.map(el => vowels.includes(el)
        ? el = sVows.pop() : el).join('')
    log(answer)
};

log(reverseVowels("hello"))

