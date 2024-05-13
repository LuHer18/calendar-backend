const express = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const createUser = async (req, res = express.response) => {

    const { email, password } = req.body

    try {
        let usuario = await Usuario.findOne({ email })
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya se encuentra registrado'
            });
        }

        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)
        await usuario.save();

        //Generar JWT
        const token = await generarJWT(usuario.id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor Hable con el administrador'
        })
    }

}

const loginUser = async(req, res) => {
    const { email, password } = req.body

    try {

        let usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Validar usuario y contraseña'
            });
        }

        const validPassword = bcrypt.compareSync(password, usuario.password)
        
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }
        //Generar JWT
        const token = await generarJWT(usuario.id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor Hable con el administrador'
        })
    }

}

const renewToken = async(req, res) => {

    const uid = req.uid;
    const name = req.name;

    //generar un JWT y retonarlo en esta petición
    const token = await generarJWT(uid, name)

    res.json({
        ok: true,
        ui,
        name,
        token
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}