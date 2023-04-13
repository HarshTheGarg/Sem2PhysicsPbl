// Express App
const express = require("express");
const app = express();

// Using environment variables from dotenv
require('dotenv').config();

// To display the requests in the terminal
const morgan = require("morgan");
app.use(morgan("dev"));

// Default Route
app.get("/", (req, res) => {
  res.json({msg: "Hello"});
});

app.get("/hell", (req, res) => {
  res.send("Hello from hell!");
})

app.listen(process.env.PORT, () =>
  console.log(`Listening on port: ${process.env.PORT}...`)
);
