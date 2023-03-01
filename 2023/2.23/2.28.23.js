
// d he starts with that card. Then the second player (queue - Frank -> Sam -> Tom -> Frank, etc.) can move with any of his cards (each card is used only once per game, and there are no rules that require players to make only the best moves). The third player makes his move after the second player, and he sees the previous moves.
// The winner of the previous round then makes the first move in the next round with any remaining card.
// The player who wins 2 rounds first, wins the game.

// Task
// Return true if Frank has a chance of winning the game.
// Return false if Frank has no chance.

// Input
// 3 arrays of 4 unique numbers in each (numbers in array are sorted in ascending order). Input is always valid, no need to check.

// Example
// Round 1: Frank 2 5 8 11, Sam 1 4 7 10, Tom 0 3 6 9. Tom has to start from 0. Frank is risking nothing and goes 2. Sam gets lucky and wins round by throwing 4.

// Round 2: Frank 5 8 11, Sam 1 7 10, Tom 3 6 9. Sam starts from 1. Tom goes 3, Frank wins with 5.

// Round 3: Frank 8 11, Sam 7 10, Tom 6 9. Frank starts from 11 and wins the round either way.

// Frank is the first to win 2 rounds and therefore wins the game, the answer is true.

// One more example
// Frank 0 1 2 3, Sam 6 7 8 11, Tom 4 5 9 10.
// With these cards Frank has no chance, the answer is false.


//not finished for edge cases- 
//Frank: 0,4,5,8, Sam:2,3,7,9, Tom:1,6,10,11   this will give false when it shoulb be true

function solution(frank, sam, tom) {
    let wins = 0;
    
    for(i=0; i < 4; i++ ){
      let fCard = frank.pop()
      if (fCard > sam.shift() && fCard > tom.shift()){
        wins++
      }
      }
      
    
    return wins >= 2  ;
  }