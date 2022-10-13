let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that when given a URL as a string, parses out
//  just the domain name and returns it as a string. 
// For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(strng) {
    let newString = ""
    for (i = 0; i < strng.length; i++) {
        if (strng[i] === "/" || strng[i] === ".") {
            newString += " "
        }else{
            newString+= strng[i]
        }
    }
    let stringArr = newString.split(" ")
    let comIndex = stringArr.indexOf("com")
    return stringArr[comIndex -1]
}

log(domainName("http://github.com/carbonfive/raygun"))
log(domainName("http://www.zombie-bites.com"))
log( domainName("https://www.cnet.com"))