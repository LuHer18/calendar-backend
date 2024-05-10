const { response } = require("express");
const Evento = require('../models/Evento')

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
const crearEvento = async(req, res = response) => {
    
    const evento = new Evento(req.body)

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save()
        res.json({
            ok: true,
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
        
    }

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