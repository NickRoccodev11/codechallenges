
// The Floyd's triangle is a right-angled triangular array
//  of natural numbers listing them in order, in lines of increasing length
// In this challenge you're given a number, and expected to return the line number it falls in,
//  in the Floyd's triangle


function rowFinder(k) {
    lastnumofRow = 0;
    row = 0;
    do {
      row++;
      lastnumofRow = lastnumofRow + row;
    } while (lastnumofRow < k);
    return row;
  }
  