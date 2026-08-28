//Hybrid inheritance is a combination of two or more types of inheritance.
// Since JavaScript does not directly support multiple inheritance with classes, we can use mixins.
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