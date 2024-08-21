// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    if(this.value > value){
      if(this.left === null){
        this.left = new BST(value);
      }else{
        this.left.insert(value)
      }
    }else{
      if(this.right === null){
         this.right = new BST(value);
      }else{
        this.right.traverse(value)
      }
    }
    return this;
  }

  contains(value) {
    if (this.value === value){
      return true
    }else if(this.value > value){
      if (this.left === null){
        return false
      }else{
       return  this.left.contains(value)
      }
    }else{
      if(this.right === null){
        return false
      }else{
       return this.right.contains(value)
      }
    }
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;
