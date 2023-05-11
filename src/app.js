//Llamado y configuración del paquete de Express:
const express = require('express');
const app = express();
const ejs = require('ejs');
app.use(express.static(__dirname)); //__dirname establece como ruta principal donde esta este archivo (app.js)
app.set('view engine', 'ejs');

app.set("views", "./src/public/views"); //El ./ establece que buscas algo en la misma carpeta que este archivo.

//Ejemplo 2 ruta:
app.get("/", (req, res) => {
    res.render("home"); //the res.sendFile is used to send an html file to the client.
});

//Exporto todo lo ejecutado por app.js al index.js para que lo ejecute el servidor:
module.exports = app;
