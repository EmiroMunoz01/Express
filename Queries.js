//Ademas de los parametros tambien podemos enviar un tipo de informacion en la URL, ademas del parametro puedo colocar un signo de ? y luego colocar una especie de declaracion de variable, eso del signo de interrogacion se le conoce como un query o consulta, solo son informacion extra que el navegador puede enviar al backend para que pueda utilizarce y hacer una operacion adicional

//Todo lo que tipee en la url es un string

const express = require("express");

const app = express();

//así como tenemos params para leer parametros, tambien tenemos query para leer queries

app.get("/hello/:user", (req, res) => {
  //de esta forma nos imprimira el valor en JSON de x: '0'
  console.log(req.query);
  //de esta otra forma accederemos a el valor
  console.log(req.query.x);
  console.log(req.params.user);
  res.send(`Hello ${req.params.user.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

//ahora bien, podemos usar esto de una forma mas completa
app.get("/search", (req, res) => {
    if(req.query.q === 'javascript books'){
        res.send('lista de libros de Javascript')
    }else{
        res.send('Pagina normal')
    }
});

//si visitamos http://localhost:3000/search aparecera que es una pagina normal 'lista de libros de Javascript'

//pero si colocamos http://localhost:3000/search?q=javascript%20books aparecera el mensaje de 

app.listen(3000);
console.log(`Server on port ${3000}`);

//estas queries son utilies por ejemplo para cambiar de pagina dentro de una web