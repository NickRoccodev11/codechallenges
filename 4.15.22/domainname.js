
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 



function domainName(url){
    let urlArr = url.split("/");
    let domain = "",
        answer = "";
    for (i = 0; i < urlArr.length; i++) {
        if (urlArr[i].includes(".") && !urlArr[i].includes("index") && !urlArr[i].includes("default")) {
            domain = urlArr[i]
        }
    }
    domainArr = domain.split(".")
    if (domainArr[0] === "www") {
        answer = (domainArr[1])
    } else {
        answer = (domainArr[0])
    }
    return answer
}