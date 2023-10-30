// earn a huge capital, you need to have an unconventional mindset. Of course, with such a complex job, there must also be special mechanisms for recreation and entertainment. For this purpose, the casino came up with a special domino set. Ordinary dominoes are a set of different combinations of two tiles, each displaying 0 to 6 points. And this set is a similar combination of tiles, but the number of points on each can be from zero to a set value that depends on the intellectual level of the players. There are all kinds of tile combinations in this dice set, but none of them must be repeated (combinations such as 2 | 5 and 5 | 2 are considered the same).there's a domino, don't worry :)When making this set of dominoes, the manufacturer faced the problem of counting the total number of points on all dominoes. This is due to the fact that the dominoes are decorated with diamonds, which are dots on the tiles and the cost of which must be estimated during manufacture.

// Input data:

// The function receives a parameter n, which indicates the maximum number of points on one domino tile.

// Test values are 0 < n < 1000

// Output data:

// Your function should return the optional number of diamond stones to be made for a given set of dice.

// Example:

// For dominoes where the maximum possible number on the knuckle is 2, the possible knuckles will be as follows --> 0 | 1, 0 | 2, 1 | 1, 1 | 2, 2 | 2 therefore, the sum of all values on the knuckles will be 1 + 2 + 1 + 1 + 1 + 2 + 2 + 2 = 12
//cases:
// 2=12
//01 02 11 12 22
// 3= 30
//01 02 11 12 22 / 03 13 23 33 // additional 18
// 4= 60
//01 02 11 12 22 03 13 23 33 04 14 24 34 44 // additional 30
// 5 =105
//01 02 11 12 22 03 13 23 33 04 14 24 34 44 05 15 25 35 45 55 // additional 45
//  every number up to n, plus n * (n+1) // 6 should be 168
// 01 02 11 12 22 03 13 23 33 04 14 24 34 44 05 15 25 35 45 55 06 16 26 36 46 56 66
function dotsOnDominoBones(n) {
    if (n === 2) {
      return 12
    }
    let total = 12;
    let counter = 2;
    while (true) {
      counter++;
      for (i = 1; i <= counter; i++) {
        total += i
      }
      total += counter * (counter + 1)
      if (counter === n) {
        return total
      }
    }
  }
  // this solution may be correct, but it times out ... more on this tomorrow