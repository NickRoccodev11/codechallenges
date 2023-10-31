//domino dots day 2
function dotsOnDominoBones(n) {
    if (n === 2) {
      return 12
    }
    let total = 12;
    let counter = 2;
    while (counter <= n) {
      counter++;
      total += (counter * (counter+1))/2
      total += counter * (counter + 1)
    }
    return total
  }

  