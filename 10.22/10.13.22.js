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