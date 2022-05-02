// ou have a string that consists of zeroes and ones.
//  Now choose any two adjacent positions in the string: if one of them is 0, 
//  and the other one is 1, remove these two digits from the string.

// Return the length of the resulting (smallest) string that you can get after applying
//  this operation multiple times?

// Note: after each operation, the remaining digits are separated by spaces 
// and thus not adjacent anymore - see the examples below.

// Examples
// For "01010" the result should be 1:

// "01010"  -->  "  010"  -->  "    0"


function zeroAndOne(s) {
    let sUpdated = s.replaceAll("01", "")
    return sUpdated.length
}

log(zeroAndOne("0010101011"))


// If replaceAll( ) is not supported...

function zeroAndOne(s) {
    
    let sUpdated = s.replace(/10/g, "").replace(/01/g,"")
      return sUpdated.length