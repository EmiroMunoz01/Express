//en express tenemos una funcion especial, pero casi no se usa, se llama all

const express = require("express");
const app = express();

//el all indica que funciona con cualquier metodo HTPP
app.all("/info", (req, res) => {
  res.send("Server info");
});


app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

app.listen(3000);
console.log(`Server on port ${3000}`);