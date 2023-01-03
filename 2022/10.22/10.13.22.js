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


/// WITH REGEX AND REPLACE()

function domainName(str) {
    let regex = /[//.]/g
    spaceStringArr = str.replace(regex, " ").split(" ")

    return spaceStringArr[spaceStringArr.indexOf("com") - 1]
}


log(domainName("http://github.com/carbonfive/raygun"))
log(domainName("http://www.zombie-bites.com"))
log( domainName("https://www.cnet.com"))


// return longest word in string


function longest(str) {
    let leng = 0;
    let longestWord = ""
    let strArr = str.split(" ");
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].length > leng) {
            leng = strArr[i].length;
            longestWord = strArr[i];
        }
    }
    return longestWord
}

log(longest("the rain in spain falls mainly on the plain"))