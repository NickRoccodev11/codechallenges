// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

class Ghost{
    constructor(){
      let colors =["red","purple","white", "yellow"]
      this.color = colors[Math.floor(Math.random()*4)]
    }
  }
let ghosty = new Ghost();
  console.log(ghosty.color)
  //remember, random gives a float so it must be floored