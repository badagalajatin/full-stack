// global.js

// 1. global object
global.message = "Hello from the global object";

console.log(global.message);

// 2. __filename
console.log("\nCurrent file:");
console.log(__filename);

// 3. __dirname
console.log("\nCurrent directory:");
console.log(__dirname);

// 4. process object
console.log("\nNode.js version:");
console.log(process.version);

console.log("\nPlatform:");
console.log(process.platform);

// 5. console object
console.warn("\nThis is a warning message");
console.error("This is an error message");

// 6. setTimeout()
setTimeout(() => {
  console.log("\nThis message appears after 2 seconds.");
}, 2000);

// 7. setInterval()
let count = 1;

const interval = setInterval(() => {
  console.log("Interval count:", count);
  count++;

  if (count > 3) {
    clearInterval(interval);
    console.log("Interval stopped.");
  }
}, 1000);
