// Import built-in Node.js modules
const os = require("os");
const path = require("path");
const fs = require("fs");

// OS module
console.log("OS MODULE");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());

// Path module
console.log("\nPATH MODULE");

const filePath = path.join(__dirname, "sample.txt");

console.log("File path:", filePath);
console.log("File name:", path.basename(filePath));
console.log("File extension:", path.extname(filePath));

// File System module
console.log("\nFS MODULE");

fs.writeFileSync(filePath, "Hello from Node.js File System module.");

console.log("File created successfully.");

const content = fs.readFileSync(filePath, "utf8");

console.log("File content:", content);

// Delete the file
fs.unlinkSync(filePath);

console.log("File deleted successfully.");
