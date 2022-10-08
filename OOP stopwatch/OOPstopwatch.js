let log = console.log
////// DON'T DELETE


const arr1 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

const arr2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
const arr3 = [['a', 'B', 'c'], ['d', 'E', 'f'], ['g', 'H', 'i']]
const arr4 = [['a', 'b', 'c'], ['g', 'h', 'i'], ['d', 'e', 'f']]
//compare two array to see if their contents are equal
// each array will have the same number of internal arrays, 
// and the same number of primitive types within those arrays
function arrayCompare(array1, array2) {

    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array1[i].length; j++) {
            if (array1[i][j] !== array2[i][j]) {
                return false
            }
        }
    }
    return true
}
log(arrayCompare(arr1, arr2))
log(arrayCompare(arr1, arr3))
log(arrayCompare(arr3, arr4))
log(arrayCompare(arr2, arr3))
log(arrayCompare(arr1, arr4))
log(arrayCompare(arr2, arr1))




