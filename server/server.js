const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config');


//OBTIENE LOS PARAMETROS EN UN JASON
//========================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
//========================================

//petición get
app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

//peticion post crear
app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }

});

//peticion put actualizar
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

//peticion delete eliminar
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

//VARIABLE GLOBLAL PORT SE CONFIGURA EN CONFIG.JS
app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto", process.env.PORT);
});