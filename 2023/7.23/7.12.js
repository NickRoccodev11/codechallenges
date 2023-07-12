// This keyword 

var age = "WRONG NUMBER"

let bruno = {
    breed: "husky",
    age: 5,
    parents: ["lilo", "artemis"],
    getBreed: function () {
        console.log("breed is: " + this.breed)
    },
    getAge: () => console.log("age is " + this.age)
}

bruno.getBreed()    // breed is husky    
bruno.getAge()      // age is WRONG NUMBER
console.log(window.age) // WRONG NUMBER

//the context of this in a regular method is determined by the calling object,
//.the context of this in an arrow function is determined by the lexical (enclosing) context where it is defined.
var age = "Wrong Number"
class Dog{
    constructor(breed, age){
        this.breed = breed;
        this.age = age
    }
    getBreed(){
        console.log("breed: " + this.breed)
    }
    getAge = () => {
        console.log("age: " + this.age)
    }
}

let dusty = new Dog("chow chow", 4)

dusty.getBreed(); //breed chowchow
dusty.getAge();   // age: 4 

// Arrow function binds differently in the context of class

