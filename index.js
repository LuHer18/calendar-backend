/* 
    Rutas de usuarios/ Auth
    localhost:4000/api/auth

*/

const express = require('express');
require('dotenv').config();

//Crear el servidor de express

const app = express();


//Directorio público

app.use(express.static('public'));

//lectura y parse del body

app.use(express.json());


//Rutas
app.use('/api/auth', require('./routes/auth'));

//TODO: CRUD: Eventos



//Escuchar peticiones
app.listen(4000, ()=> {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})