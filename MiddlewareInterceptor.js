const express = require("express");
const morgan = require("morgan");


const app = express();

//podemos instalar middlewares,

// app.use((req, res, next) => {
//   console.log("Paso por aqui");
//   next();
// });

app.use(morgan('dev'))

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
