

// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW)
//  and a certain degree to turn (a multiple of 45, between -1080 and 1080); 
//  positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.




function direction(facing, turn) {
    let compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    let turns = turn / 45;
    let position = compass.indexOf(facing)
    let steps = position + turns
    if (turn > 0) {
        for (i = position; i < steps; i++) {
            position += 1;
            if (position > 7) {
                position = 0
            }
        }
    } else {
        for (i = position; i > steps; i--) {
            position -= 1;
            if (position < 0) {
                position = 7
            }
        }
    }
    return compass[position]
}