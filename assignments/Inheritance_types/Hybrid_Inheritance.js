//Hybrid inheritance is a combination of two or more types of inheritance.
// Since JavaScript does not directly support multiple inheritance with classes, we can use mixins.
class Grandparent {
  showGrandparent() {
    console.log("This is Grandparent");
  }
}

class Parent extends Grandparent {
  showParent() {
    console.log("This is Parent");
  }
}

class Child1 extends Parent {
  showChild1() {
    console.log("This is Child 1");
  }
}

class Child2 extends Parent {
  showChild2() {
    console.log("This is Child 2");
  }
}

let child1 = new Child1();
let child2 = new Child2();

child1.showGrandparent();
child1.showParent();
child1.showChild1();

child2.showGrandparent();
child2.showParent();
child2.showChild2();
