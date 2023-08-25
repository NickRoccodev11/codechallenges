
//find smallest in array
// the slow way
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = 0
     for(let i=0; i < args.length; i++){
       if(smallest === 0){
         smallest = args[i]  
       }else if(args[i]<smallest){
         smallest = args[i]  
       }
     }
      return smallest
    }
  }
  