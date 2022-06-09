

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if
//  it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".



function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let you2PontoonTime = pontoonDistance / youSpeed;
    let shark2PontoonTime = sharkDistance / sharkSpeed;
      dolphin ? shark2PontoonTime *= 2 : false;
      log(you2PontoonTime)
      log(shark2PontoonTime)
    if(you2PontoonTime<shark2PontoonTime){
      return "Alive!"
    }else{
      return "Shark Bait!"
    }
    }

   log( shark(12, 50, 4, 8, true));


//    REFACTORED

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let detour
    let response;
    dolphin ? detour = 2 : detour = 1;
  (pontoonDistance/youSpeed)<(sharkDistance/sharkSpeed)* detour ? response = "Alive!" : response = "Shark Bait!"
   return response
  }

//   REFACTORED

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
   dolphin ? sharkSpeed /= 2 : false
   return (pontoonDistance/youSpeed)<(sharkDistance/sharkSpeed) ? "Alive!" : "Shark Bait!"
   
  }