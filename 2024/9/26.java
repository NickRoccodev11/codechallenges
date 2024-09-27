import java.util.Arrays;
class Kata{
  public static long sumTwoSmallestNumbers(final long [] numbers) {
    
   Long smallest = Long.MAX_VALUE;
   Long secondSmallest = Long.MAX_VALUE;
    
    for(int i = 0; i < numbers.length; i++){
      if(numbers[i] < smallest ){
        secondSmallest = smallest;
        smallest = numbers[i];
      }else if (numbers[i] < secondSmallest){
        secondSmallest = numbers[i];
      }
    }
    
    return smallest + secondSmallest; 
  }             
}