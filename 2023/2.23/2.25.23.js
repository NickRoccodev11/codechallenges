
// input: string, arr of positive integers
//capitalize the letters at the indeces provided in the array


function capitalize(s,arr){
    let lArr = s.split('')
    
    for(i=0; i<lArr.length; i++){
      if(arr.includes(i)){
        lArr[i] = lArr[i].toUpperCase()
      }
    }
    
    return lArr.join('');
  };