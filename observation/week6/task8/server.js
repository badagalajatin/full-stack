const express = require("express");

const app = express();

const PORT = 3001;

// Middleware function
function requestLogger(req, res, next) {
  const time = new Date().toLocaleTimeString();

  console.log("[" + time + "] " + req.method + " " + req.url);

  // Pass control to the next handler
  next();
}

// Use middleware
app.use(requestLogger);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Middleware Demo");
});

// About route
app.get("/about", (req, res) => {
  res.send("This application demonstrates request logging middleware.");
});

// Start server
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
