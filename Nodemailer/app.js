const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("You are in home");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
