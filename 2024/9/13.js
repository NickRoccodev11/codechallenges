/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums[0] == 0 && nums.length > 1) return false;

  for(let i = 0; i < nums.length -1; i++){
      if(nums[i] == 0){
          let counter =1;
          for(let j  = i - 1; j >= 0; j--){
              if(nums[j] > counter){
                  break;
              }else if( j == 0 && nums[j] <= counter){
                  return false;
              }
              counter++;
          }
      }
  }
  return true;
};
// the length is 5
// an elem could be 10^4 so we can't simply explore every permutation
//each jump has num[i] possibilities
//we can always choose to go one, unless we hit a zero
//if an array has no zeros, true
//if the first position is zero, false
//if we hit a zero, we need to figure out if we can jump it
// a zero can be jumped if any element  before it:
// is greater than the distance in steps between 
//that element and zero
//if we get a zero:
//loop backwards to the beginning from that index
// increase a counter that starts at zero as you walk back
// if the element at cur index is greater than the counter,
//we can continue
//if we reach the end without satisfying the condition
//return false