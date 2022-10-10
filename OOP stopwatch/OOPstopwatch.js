let log = console.log

/////////////////////////////////////////////////////////////////////////////////////////////////


myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

function sortAandLength(arr){
let arr1= [], arr2 =[], arr3 = [];

for(i=0;i<arr.length; i++){
    if(arr[i].includes("a")){
       arr1.push(arr[i])
    }else if(arr[i].length>3){
        arr3.push(arr[i])
    }else{
        arr2.push(arr[i])
    }
}
log(arr1.concat(arr2,arr3))
}

sortAandLength(myArr)