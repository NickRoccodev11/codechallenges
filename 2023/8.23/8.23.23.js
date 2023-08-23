function parameter(n) {
    // turn into array C
     // reduce for total sum 
     // reduce for toal prodcut
     // find LCM of sum and product (how)?
               //find the smaller num
               // see if both are divisible by the min, 
               //..
                // and increase the min until they are both divisible
     let stringn = n.toString()
     let arrn =[]
     for(i=0; i< stringn.length; i++ ){
       arrn[i] = stringn[i]
     }
     let sum = arrn.reduce((a,c)=> Number(a)+Number(c),0)
     let prod = arrn.reduce((a,c)=>Number(a)*Number(c),1)
     let min = sum < prod ? sum : prod
     let lcm;
     
     while(true){
       if(min%sum ===0 && min%prod === 0){
         lcm = min
         break;
       }else{
         min++
       }
     }
     return lcm
   }