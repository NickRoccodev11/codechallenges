

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgbToHex(r, g, b) {

    // Get red values
    let rHex1;
    if (r < 0) {
        rHex1 = 0
    } else if (r > 255) {
        rHex1 = Math.floor(255 / 16)
    } else {
        rHex1 = Math.floor(r / 16)
    }
    let rRemainder;
    if (r < 0) {
        rRemainder = (0 / 16).toString().split(".")
    } else if (r > 255) {
        rRemainder = (255 / 16).toString().split(".")
    } else {
        rRemainder = (r / 16).toString().split(".")
    }
    let rHex2 = 0
    if (rRemainder[1]) {
        rHex2 = `.${rRemainder[1]}` * 16
    }

    // get green values
    let gHex1;
    if (g < 0) {
        gHex1 = 0
    } else if (g > 255) {
        gHex1 = Math.floor(255 / 16)
    } else {
        gHex1 = Math.floor(g / 16)
    }
    let gRemainder;
    if (g < 0) {
        gRemainder = (0 / 16).toString().split(".")
    } else if (g > 255) {
        gRemainder = (255 / 16).toString().split(".")
    } else {
        gRemainder = (g / 16).toString().split(".")
    }
    let gHex2 = 0
    if (gRemainder[1]) {
        gHex2 = `.${gRemainder[1]}` * 16
    }

    // get blue values
    let bHex1;
    if (b < 0) {
        bHex1 = 0
    } else if (b > 255) {
        bHex1 = Math.floor(255 / 16)
    } else {
        bHex1 = Math.floor(b / 16)
    }
    let bRemainder;
    if (b < 0) {
        bRemainder = (0 / 16).toString().split(".")
    } else if (b > 255) {
        bRemainder = (255 / 16).toString().split(".")
    } else {
        bRemainder = (b / 16).toString().split(".")
    }
    let bHex2 = 0
    if (bRemainder[1]) {
        bHex2 = `.${bRemainder[1]}` * 16
    }

    // push into array
    let numArray = []
    numArray.push(rHex1, rHex2, gHex1, gHex2, bHex1, bHex2)

    // iterate over array to change to base 16 values (A-F) 
    let hexArray = numArray.map(el => {
        switch (el) {
            case 10:
                return el = "A";
                break;
            case 11:
                return el = "B";
                break;
            case 12:
                return el = "C"
                break;
            case 13:
                return el = "D"
                break;
            case 14:
                return el = "E"
                break;
            case 15:
                return el = "F"
                break;

            default:
                return el;

        }
    })

    return hexArray.join("");



}