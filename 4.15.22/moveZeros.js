
// Write an algorithm that takes an array and moves 
// all of the zeros to the end, preserving the order of the other elements.




function moveZeros(arr) {
    let orderedArr=[]
      arr.forEach(el=>{
          if (el!==0){
              orderedArr.push(el)
          }
      })
      arr.forEach(el=>{
          if (el===0){
              orderedArr.push(el)
          }
      })
      return(orderedArr)
  }