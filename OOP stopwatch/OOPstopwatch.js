let log = console.log

/////////////////////////////////////////////////////////////////////////////////////////////////


myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

// // function sortAandLength(arr){


// // }

// var name = ['David', 'Adam', 'John', 'Bob'];
// var name.sort(function (first, second) {
//    if (first > second) {
//       return -1;
//    }
//    if (first < second) {
//       return 1;
//    }
//    return 0;
// });
// console.log(name)


myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

function sortAandLength(arr) {
    let newArr = []

    newArr = arr.sort((a, b) => {
        if (a.length < 4 && b.length > 3) {
            return -1
        } else if (a.length > 3 && b.length < 4) {
            return 1
        } else {
            return 0
        }

    })
   

        newArr =  arr.sort((a, b) => {
            if (a.includes("a") && !b.includes("a")) {
                return -1
            } else if (b.includes("a") && !a.includes("a")) {
                return 1
            } else {
                return 0
            }
     })
    return newArr
}

log(sortAandLength(myArr))