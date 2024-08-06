let log = console.log
/////////////////////////////////////////////////////////////////////////

function findGlasses(arr){
    let bridge = 0;
    for(let i = 0; i< arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] == "O"){
            console.log(arr[i])
            j++
          while(arr[i][j] =="-"){
            j++
            bridge++;
            console.log("j:", j)
            console.log(arr[i][j])
          }
          if(arr[i][j] == "O" && bridge > 0){
            console.log("j:", j)
            return i
          }else{
            bridge = 0
          }
        }
      }
    }
  }
  console.log(findGlasses("O--#--O","dustO---Odust","more dust"))