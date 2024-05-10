const { response } = require("express");


/* {
    ok:true,
    msg: 'res'
} */

//getEventos

const getEventos = (req, res = response) => {

    uid = req.uid;
    name = req.name;

    res.status(201).json({
        ok:true,
        msg: 'getEventos',
        uid,
        name
        
    })

}
const crearEvento = (req, res = response) => {

    uid = req.uid;
    name = req.name;

    res.status(201).json({
        ok:true,
        msg: 'Crear evento',
        uid,
        name
        
    })

}

const actualizarEvento = (req, res = response) => {

    uid = req.uid;
    name = req.name;

    res.status(201).json({
        ok:true,
        msg: 'Actualizar evento',
        uid,
        name
        
    })

}

const eliminarEvento = (req, res = response) => {

    uid = req.uid;
    name = req.name;

    res.status(201).json({
        ok:true,
        msg: 'Eliminar evento',
        uid,
        name
        
    })

}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}