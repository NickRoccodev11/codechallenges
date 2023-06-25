
// his series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Input coordinates fit in range 

// −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.





function distanceBetweenPoints(a, b) {

    const x1 = a.x;
    const y1 = a.y;
    const x2 = b.x;
    const y2 = b.y;
  
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  }
  