// print out the bottles of beer song. No hard coding the whole song!
//each line is it's own element in an array

var sing = function () {
    let beer = 99
    let song = []
    while (beer > 1) {
      song.push(`${beer} bottles of beer on the wall, ${beer} bottles of beer.`);
      beer--;
      if (beer === 1) {
        song.push("Take one down and pass it around, one bottle of beer on the wall.")
        song.push("1 bottle of beer on the wall, 1 bottle of beer.")
        song.push("Take one down and pass it around, no more bottles of beer on the wall.")
        song.push("No more bottles of beer on the wall, no more bottles of beer.")
        song.push("Go to the store and buy some more, 99 bottles of beer on the wall.")
      } else {
        song.push(`Take one down and pass it around, ${beer} bottles of beer on the wall.`)
      }
    }
    log(song)
  };