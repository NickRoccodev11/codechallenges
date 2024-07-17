//algoexpert "Class Photos"
function classPhotos(redShirtHeights, blueShirtHeights) {
  //if the input can't be mutated: 
  let reds = redShirtHeights.sort((a, b) => a - b);
  let blues = blueShirtHeights.sort((a, b) => a - b);
  let taller, shorter;
  if (reds[0] > blues[0]) {
    taller = reds;
    shorter = blues;
  } else if (reds[0] < blues[0]) {
    taller = blues;
    shorter = reds;
  } else {
    return false;
  }
  for (i = 0; i < shorter.length; i++) {
    if (shorter[i] >= taller[i]) {
      return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
