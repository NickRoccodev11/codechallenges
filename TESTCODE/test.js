const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode
// Parameters - clarify all possibilities for params. think of edge cases. 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 
//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:
//1 Break your algorithm/function into individual operations
//2 Calculate the Big O of each operation
//3 Add up the Big O of each operation together
//4 Remove the constants
//5 Find the highest order term — this will be what we consider the Big O of our algorithm/function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The new football league season is coming and the Football Association need some help resetting the league standings. Normally the initial league standing is done in alphabetical order (from A to Z) but this year the FA have decided to freshen it up.

// It has been decided that team who finished first last season will begin the next season in first place. Regardless of what letter their club begins with. e.g. if Manchester City were in first place last year, they will begin the season in position one. All other teams should be in alphabetical order.

// The teams will be fed in as an object ({}). The key will be will be their position from last season and the value is the club's name e.g. Arsenal.

// The output should be an object ({}) with the key as the club's starting position for the new season and the value should be club's name e.g. Arsenal.

// For example. If in the previous season the standings were:

// 1:'Leeds United' 2:'Liverpool' 3:'Manchester City' 4:'Coventry' 5:'Arsenal'

// Then the new season standings should

// 1:'Leeds United' (first last season) 2:'Arsenal' (alphabetical) 3:'Coventry' (alphabetical) 4:'Liverpool' (alphabetical) 5:'Manchester City' (alphabetical)

function premierLeagueStandings(teamStandings) {
  let teams = Object.values(teamStandings)
  teams.shift()
  teams.sort()
  // console.log(teams)
  let newStandings = {}
  newStandings[1] = teamStandings[1]
  let counter = 2
  for(team of teams){
    newStandings[counter] = team;
    counter++
  }
  return newStandings
}


console.log(premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'}))
