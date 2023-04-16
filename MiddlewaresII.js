//puedo decirle al middleware que la ejecucion termine ahí, por ejemplo la direccion es el dashboard, para que el usuario llegue a el dashboard puedo decirle al middleware que verifique si el usuario esta registrado en la bd o algo similar, puedo colocar una funcion que se llame isAuthenticated, es una forma de proteger algunas rutas

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Paso por aqui");
  next();
});

//colocando las rutas antes del middleware de autenticacion se saltaran la verificacion del correo
app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.use((req, res, next) => {
  if (req.query.login === "emiro@pitalito.com") {
    next();
  } else {
    res.send("No autorizado apa");
  }
});

//todas las rutas que esten despues de la proteccion de atenticacion estaran protegidas,
app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
