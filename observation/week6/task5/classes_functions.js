// Function example
function createStudent(name, course) {
  return {
    name: name,
    course: course,

    introduce: function () {
      return "I am " + this.name + " and I study " + this.course + ".";
    },
  };
}

// Class example
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    return "I am " + this.name + " and I study " + this.course + ".";
  }
}

// Object created using function
const studentFunction = createStudent("Rahul", "CSE");

// Multiple objects created using class
const student1 = new Student("Jatin", "CSE");
const student2 = new Student("Priya", "ECE");
const student3 = new Student("Arjun", "IT");

console.log("FUNCTION EXAMPLE");
console.log(studentFunction.introduce());

console.log("\nCLASS EXAMPLE");
console.log(student1.introduce());
console.log(student2.introduce());
console.log(student3.introduce());

console.log("\nSTUDENT PROPERTIES");
console.log("Student 1:", student1.name);
console.log("Student 2:", student2.name);
console.log("Student 3:", student3.name);
