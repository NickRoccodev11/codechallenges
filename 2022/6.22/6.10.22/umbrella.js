// DESCRIPTION:
// A Man and his Umbrellas
// Each morning a man walks to work, and each afternoon he walks back home.

// If it is raining in the morning and he has an umbrella at home, he takes an umbrella for the journey so he doesn't get wet, and stores it at work. Likewise, if it is raining in the afternoon and he has an umbrella at work, he takes an umbrella for the journey home.

// Given an array of the weather conditions, your task is to work out the minimum number of umbrellas he needs to start with in order that he never gets wet. He can start with some umbrellas at home and some at work, but the output is a single integer, the minimum total number.

// The input is an array/list of consecutive half-day weather forecasts. So, e.g. the first value is the 1st day's morning weather and the second value is the 1st day's afternoon weather. The options are:

// "clear",
// "sunny",
// "cloudy",
// "rainy",
// "overcast",
// "windy"
// "thunderstorms".
// e.g. for three days, 6 values:

// weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"]
// N.B. He never takes an umbrella if it is not raining.

// Examples:
// minUmbrellas(["rainy", "clear", "rainy", "cloudy"])
// should return 2

// Because on the first morning, he needs an umbrella to take, and he leaves it at work. So on the second morning, he needs a second umbrella.

// minUmbrellas(["sunny", "windy", "sunny", "clear"])
// should return 0

// Because it doesn't rain at all

// minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])
// should return 1




function minUmbrellas(weather) {
    let umbrellasAtHome = 0;
    let umbrellasAtWork = 0;
  
    //simplify with array of booleans for rain status
    let isItRaining = []
    for (i = 0; i < weather.length; i++) {
      if (weather[i] === "rainy" || weather[i] === "thunderstorms") {
        isItRaining.push(true);
      } else {
        isItRaining.push(false)
      }
    }
  
    // keep track of umbrellas
    let atHome = true;
    for (i = 0; i < weather.length; i) {
      if (isItRaining[i] && atHome) {
        if (umbrellasAtHome > 0) {
          umbrellasAtHome--;
          umbrellasAtWork++;
          atHome = false;
          i++;
        } else if (umbrellasAtHome <= 0) {
          umbrellasAtWork++;
          atHome = false;
          i++;
        }
      } else if (!isItRaining[i] && atHome) {
        atHome = false;
        i++;
      } else if (!isItRaining[i] && !atHome) {
        atHome = true;
        i++;
      } else if (isItRaining[i] && !atHome) {
        if (umbrellasAtWork > 0) {
          umbrellasAtWork--;
          umbrellasAtHome++;
          atHome = true;
          i++;
        } else if (umbrellasAtWork <= 0) {
          umbrellasAtHome++;
          atHome = true;
          i++;
        }
      }
    }
    return umbrellasAtHome + umbrellasAtWork
  }
  