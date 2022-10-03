let log = console.log
////// DON'T DELETE

let stringy = "hello/nthere"

function horMirror(strng) {
  let hResult='',
    tempString = "";
  for (i = 0; i < strng.length; i++) {
    if (strng[i] !== "/") {
      tempString += strng[i]
      log(tempString)
    } else if (strng[i] === "/") {
      hResult += tempString.split('').reverse('').join('')
      hResult += "/n"
      tempString = ''
      i++
    }else if (i=== strng.length-1){
      hResult += tempString.split('').reverse('').join('')
    }
    log(hResult)
  }
}

  horMirror(stringy)