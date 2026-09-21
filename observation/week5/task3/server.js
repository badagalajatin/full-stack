const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Student Management Server</h1>
        <p>Welcome to the Express.js Student Server.</p>
        <p>Available routes:</p>
        <ul>
            <li>/</li>
            <li>/students</li>
            <li>/about</li>
        </ul>
    `);
});


// Students data
const students = [
    {
        id: 1,
        name: "Jatin",
        course: "CSE",
        year: 3
    },
    {
        id: 2,
        name: "Rahul",
        course: "CSE",
        year: 3
    },
    {
        id: 3,
        name: "Priya",
        course: "ECE",
        year: 3
    },
    {
        id: 4,
        name: "Arjun",
        course: "IT",
        year: 3
    },
    {
        id: 5,
        name: "Sneha",
        course: "CSE",
        year: 3
    }
];


// GET /students
app.get("/students", (req, res) => {
    res.json(students);
});


// About route
app.get("/about", (req, res) => {
    res.send(`
        <h1>About the Application</h1>
        <p>This is a basic Express.js Student Server.</p>
        <p>It demonstrates routing, HTTP methods and response handling.</p>
    `);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
