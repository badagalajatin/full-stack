// multiple child classes inherit from one parent class.
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

class Cat extends Animal {
  meow() {
    console.log("Cat is meowing");
  }
}

let dog = new Dog();
let cat = new Cat();

dog.eat();
dog.bark();

cat.eat();
cat.meow();