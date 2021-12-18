const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const rutas = express.Router()

const Usuario = require("../models/Usuario")

rutas.post('/login', async (req, res) => {

    const correo = req.body.correo

    const usuario = await Usuario.findOne({correo: correo})

    if (!usuario) {
        return res.json({
            mensaje: "usuario no existe"
        })
    } else {
        const password = req.body.pass

        const validacion_pass = await bcrypt.compare(password, usuario.pass)

        if (!validacion_pass) {
            return res.json({
                mensaje: "clave no valida"
            })
        }
    }

    const token = jwt.sign({
        nombre: usuario.nombre,
        id: usuario._id
    }, process.env.SECRETO_JWT)

    res.json({
        mensaje: "Bienvenido",
        token: token
    })

})


module.exports = rutas