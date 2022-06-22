// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

// Write a function which returns valid rating represented as moons ('o','c','x') in single string.


function moonRating(rating) {
    let newRating = "";
    //fill in moons from the whole numbers
    for (i = 0; i < Math.floor(rating / 2); i++) {
      newRating += "o"
    }
  //format arg to remove whole number and leave fractional number with decimal
    let remaining = (rating / 2).toString().split(".")
    remaining = Number([".", remaining[1]].join(""))
  
  // fill in half or full moons for fractional numbers
    if (remaining >= .25 && remaining < .75) {
      newRating += "c"
    } else if (remaining >= .75) {
      newRating += "o"
    }
  // fill in x's for ratings with less than 5 moons
    while (newRating.length < 5) {
      newRating += "x"
    }
    return newRating
  }