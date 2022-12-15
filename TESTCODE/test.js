const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a magazine of words and a ransom note,
//     determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    // describe("Ransom Note", () => {
    //     it("Should return true", () => {
    //         assert.equal(ransomNote("sit ad est sint", magazine), true);
    //     });

    //     it("Should return false", () => {
    //         assert.equal(ransomNote("sit ad est love", magazine), false);
    //     });

    //     it("Should return true", () => {
    //         assert.equal(ransomNote("sit ad est sint in in", magazine), true);
    //     });

    //     it("Should return false", () => {
    //         assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
    //     });
    // });

const ransomNote = (note, magazine) => {
    let noteMap = {}
    let magazineMap = {}
    note = note.split(" ")
    magazine = magazine.split(" ")
    for (word of note) {
        noteMap[word] = noteMap[word] + 1 || 1
    }
    for (word of magazine) {
        magazineMap[word] = magazineMap[word] + 1 || 1
    }

    for (cutOut in noteMap) {
        if (!magazineMap[cutOut]) {
            return false
        } else if (noteMap[cutOut] > magazineMap[cutOut]) {
            return false
        }
    }
    return true
}
log(ransomNote("sit ad est sint", magazine), true);
log(ransomNote("sit ad est love", magazine), false);
log(ransomNote("sit ad est sint in in in in", magazine), false);
log(ransomNote("sit ad est sint in in", magazine), true);


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
