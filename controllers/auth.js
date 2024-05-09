const express = require('express');
const Usuario = require('../models/Usuario');

const createUser = async (req, res = express.response) => {

    const { email, password } = req.body

    try {
        let usuario = await Usuario.findOne({email})
        if( usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya se encuentra registrado'
            });
        }

        usuario = new Usuario(req.body);
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor Hable con el administrador'
        })
    }

}

const loginUser = (req, res) => {

    const { email, password } = req.body

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const renewToken = (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}