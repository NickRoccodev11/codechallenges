function bestSeat(seats) {
  let biggestSpace = 0;
  let startIdx; 
   for(let i = 0; i < seats.length; i++){
     let currSpace = 0 
     let currStart = i
     while(seats[i] == 0){
       currSpace++
       i++
     } 
     if(currSpace > biggestSpace ){
       biggestSpace = currSpace;
       startIdx = currStart
     }
   }
   if(biggestSpace == 0){
       return -1;
   }else if(biggestSpace % 2 === 0){
     return startIdx + (biggestSpace / 2) - 1
   }else{
     return startIdx + Math.floor(biggestSpace / 2)
   }
 }
 