// You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.

// A building will fall if the magnitude of the earthquake is greater than the strength of the building.

// An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.

// Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735

// A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay

// Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.

//DECAY CALCULATIONS:
//for loop that goes up to age
//currStrength starts at 1000
//each iteration divide 1/100 * currentStrength
//update currentStrength var

//EARTHQUAKE PART:
//REDUCE INCEPTION!!

function strongEnough(earthquake, age) {
    //building strength:
    let currStrength = 1000
    for (i = 0; i < age; i++) {
      let year = (1 / 100) * currStrength;
      currStrength -= year
    }
    // EarthQuake strength
    let result = earthquake.reduce((total, innerArray) => {
      let sum = innerArray.reduce((innerTotal, num) => innerTotal + num, 0)
      return total * sum
    }, 1)
    return result <= currStrength ? "Safe!" : "Needs Reinforcement!"
  }
  