
//"zip" two arrays by inputing each element into the provided function
// examp:   zipWith((a,b)=>a-b, [5,5,5], [1,2,3] )  :::> [4,3,2]  


function zipWith(fn,a0,a1) {
    let shorter = a0.length < a1.length ? a0.length : a1.length
     let zipped = []
    
     for(i=0; i< shorter; i++ ){
       zipped.push(fn(a0[i], a1[i])) 
    }
     
     return zipped;
   }