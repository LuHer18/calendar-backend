const { response } = require("express");
const Evento = require('../models/Evento')

/* {
    ok:true,
    msg: 'res'
} */

//getEventos

const getEventos = async(req, res = response) => {

    const eventos = await Evento.find()
                                .populate('user', 'name')
    res.status(201).json({
        ok:true,
        eventos
        
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


    res.json({
        ok:true,
        msg: 'Actualizar evento',

        
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