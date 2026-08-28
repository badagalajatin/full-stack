//One child class inherits from one parent class.

class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

let dog = new Dog();

dog.eat(); // Inherited method
dog.bark(); // Child method
