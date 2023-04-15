const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("this is from express app");

  res.status(200);
  res.send("Hello from express");
});

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });

//export app

module.exports = app;
