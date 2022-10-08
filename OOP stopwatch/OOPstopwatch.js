let log = console.log
////// DON'T DELETE

function charRemover(strng, num) {
    let cleanString = "";
    for (i = 0; i < strng.length; i++) {
        if ((i + 1) % num !== 0){
            cleanString += strng[i]
        } 
    }
    return cleanString
}

log(charRemover("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))