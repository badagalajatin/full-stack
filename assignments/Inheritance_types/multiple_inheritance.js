//JavaScript does not support multiple inheritance directly using classes, but we can achieve similar behavior using mixins.
class Father {
    fatherProperty() {
        console.log("Father's property");
    }
}

class Mother {
    motherProperty() {
        console.log("Mother's property");
    }
}

class Child extends Father {
    motherProperty() {
        console.log("Mother's property");
    }
}

let child = new Child();

child.fatherProperty();
child.motherProperty();
