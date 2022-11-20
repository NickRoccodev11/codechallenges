// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"




const unscrambleEggs = word => word.split("egg").join("")

var twoSum = function(nums, target) {
    const sumMap = {}
    for (i=0; i<nums.length;i++){
        let difference = target - nums[i];
        if(sumMap[difference]){
            return [sumMap[difference], i]
        }else{
            sumMap[difference] = i
        }
      }
    };

    log(twoSum([2,7,4,6,9]))