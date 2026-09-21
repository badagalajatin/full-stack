const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter filename: ", function (filename) {
  rl.question("Enter initial content: ", function (content) {
    // Create and write the file
    fs.writeFileSync(filename, content);

    console.log("\nFile created successfully!");

    // Read the file
    let data = fs.readFileSync(filename, "utf8");

    console.log("\nInitial file content:");
    console.log(data);

    rl.question("\nEnter additional content: ", function (additional) {
      // Append content to the file
      fs.appendFileSync(filename, "\n" + additional);

      console.log("\nContent appended successfully!");

      // Read the final contents
      let finalData = fs.readFileSync(filename, "utf8");

      console.log("\nFinal file content:");
      console.log(finalData);

      rl.close();
    });
  });
});
