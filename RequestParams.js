//parametros, por ejemplo para visitar hola/emiro tenemos una configuracion para el mensaje que nos respondera el servidor dependiendo del nomnbre que se ingrese, a esto se le conoce como parametros, son parametros porque van a ir cambiando
const express = require("express");

const app = express();

//al colocar los dos puntos indicara que todo lo que venga de ahí en adelante ira cambiando, en este caso todos los nombres que busquemos nos arrojara como parametro Hello Emiro

app.get("/hello/:user", (req, res) => {
  console.log(req.params.user);
  res.send(`Hello ${req.params.user.toUpperCase()}`);
});

//envio de varios parametros
app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  // console.log(req.params.x);
  // console.log(req.params.y);

  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
