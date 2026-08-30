// Array
let scores = [72, 85, 91, 76, 89];

// Function to display scores
function displayScores(arr) {
  console.log("Student Scores:", arr);
}

// Function to calculate total
function calculateTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// Function to calculate average
function calculateAverage(arr) {
  return calculateTotal(arr) / arr.length;
}

// Function to add a new score
function addScore(arr, score) {
  arr.push(score);
  return arr;
}

// Display original scores
displayScores(scores);

// Display total
console.log("Total Scores:", calculateTotal(scores));

// Display average
console.log("Average Score:", calculateAverage(scores));

// Add a new score
console.log("After Adding New Score:");

addScore(scores, 94);

// Display updated scores
displayScores(scores);

// Display new total
console.log("New Total:", calculateTotal(scores));
