const express = require('express')

const app = express()


app.get('/products', (req,res)=>{

    //aqui puede ir la logica
    // una consulta sql
    // validar datos
    
    res.send('Lista de productos')
})

app.post('/products', (req,res)=>{
    res.send('Creando productos')
})

app.put('/products', (req,res)=>{
    res.send('Actualizando productos')
})

app.delete('/products', (req,res)=>{
    res.send('Eliminando productos')
})



app.listen(3000)
console.log(`Server on port ${3000}`);

