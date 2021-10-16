
const cors = require('cors');
const { response } = require('express');
const express = require('express');
const { dbConnection } = require('./db/config');
const  path  = require('path');
require('dotenv').config();

const puerto = process.env.PORT;

// Crear el servidor/aplicacion de express
const app = express();

// Base de Datos
dbConnection();

// Directorio publico
app.use( express.static('public') )

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth' ) );

// Manejar demas rutas
app.get( '*', ( req, res = response ) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
})

app.listen( puerto, () => {
    console.log( `Servidor corriendo en puerto ${ puerto }`)
});