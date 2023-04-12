const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/miarchivo", (req, res) => {
  res.json("./static/JS.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({ name: "Emiro" });
});

app.listen(3000);

console.log(`Server on port ${3000}`);
