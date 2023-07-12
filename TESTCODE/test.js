let log = console.log
/////////////////////////////////////////////////////////////////////////
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