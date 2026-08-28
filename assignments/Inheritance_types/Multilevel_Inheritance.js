// one class inherits from another class, and a third class inherits from the second class.
class Grandparent {
    house() {
        console.log("Grandparent has a house");
    }
}

class Parent extends Grandparent {
    car() {
        console.log("Parent has a car");
    }
}

class Child extends Parent {
    bike() {
        console.log("Child has a bike");
    }
}

let child = new Child();

child.house(); // From Grandparent
child.car();   // From Parent
child.bike();  // From Child