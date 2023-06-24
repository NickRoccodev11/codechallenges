// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.



function spinAround(turns) {
    let degrees = 0
    for(i=0; i< turns.length;i++){
      if(turns[i]==="right"){
        degrees += 90
      }else{
        degrees -= 90
      }
    }
      return Math.floor(Math.abs(degrees)/360);
    }