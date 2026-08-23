const fs = require("fs");

// 1. Create and write to a file
fs.writeFileSync("student.txt", "Name: Jatin");
console.log("File created successfully.");

// 2. Append data
fs.appendFileSync("student.txt", "\nCourse: CSE");
console.log("Data appended successfully.");

// 3. Read the file
const data = fs.readFileSync("student.txt", "utf8");
console.log("\nFile Content:");
console.log(data);

// 4. Rename the file
fs.renameSync("student.txt", "studentDetails.txt");
console.log("\nFile renamed successfully.");

// 5. Check whether the file exists
if (fs.existsSync("studentDetails.txt")) {
  console.log("File exists.");
}

// 6. Delete the file
fs.unlinkSync("studentDetails.txt");
console.log("File deleted successfully.");
