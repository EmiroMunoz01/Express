const express = require("express");
const app = express();

//aqui viene el concepto de middelware, antes de la ruta puedo crear una funcion, para que express ejecute la funcion lo tiene que utilizar de alguna forma, es por eso que express tiene un metodo que se llama use

//si quiero obtener informacion de la peticion desde la funcion, la funcion ya tiene un parametro llamado req, y tambien tenemos acceso al response
//cualquier ruta de mi app pasara por aqui y luego recien llegara a la otra ruta
//desde aqui se puede ver la peticion que se esta realizando

app.use((req, res, next) => {
  console.log("Paso por aqui");
  next();
});

//ahora se quedara cargando y cargando, pero no ha llegado a la ruta get y si no llega pues no puede responder nada, y si no responde nada el navegador se quedara esperando la respuesta, para evitar la carga infinita express tiene un funcion llamada next que la agregaremos a la funcion

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
