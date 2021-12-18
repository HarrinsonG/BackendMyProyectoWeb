//llamamos el modelo de usuarios
var usuarios = require("../models/Usuarios");
var bcrypt = require("bcrypt")

async function RegistrarUsuario(req, res) {
  console.log(req.body);
  /* return res.json({}) */
  const salto = await bcrypt.genSalt(10)

  const password = await bcrypt.hash(req.body.password1, salto)

  const nuevo_usuario = await new usuarios({
    rol: req.body.rol,
    tipo_document: req.body.tipo_document,
    num_document: req.body.num_document,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    sexo: req.body.sexo,
    email: req.body.email,
    username: req.body.username,
    password1: password,
    password2: req.body.password2,
    estado: req.body.estado,
    condiciones: req.body.condiciones,
  }).save();
  return res.json(nuevo_usuario);
}

async function EditarUsuario(req, res) {
  console.log(req.body);
  var actualizarUsuario = await usuarios.findByIdAndUpdate(
    req.body._id,
    {
      rol: req.body.rol,
      tipo_document: req.body.tipo_document,
      num_document: req.body.num_document,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      sexo: req.body.sexo,
      email: req.body.email,
      username: req.body.username,
      password1: req.body.password1,
      password2: req.body.password2,
      estado: req.body.estado,
      condiciones: req.body.condiciones,
    },
    { new: true }
  );

  return res.json(actualizarUsuario);
}

async function ListaUsuarios(req, res) {
  const buscarUsuarios = await usuarios.find();

  return res.json(buscarUsuarios);
}

async function TraerUsuario(req, res) {
  const buscarUsuario = await usuarios.findById(req.body.id);

  return res.json(buscarUsuario);
}

async function DesactivarUsuario(req, res) {
  const desactivarUsuario = await usuarios.findById(req.body.id);
  if (desactivarUsuario) {
    await desactivarUsuario
      .set({
        estado: desactivarUsuario.estado == "activo" ? "inactivo" : "activo",
      })
      .save();
    return res.json(desactivarUsuario);
  } else {
    return res.send("Usuario no encontrado");
  }
}

module.exports = {
  RegistrarUsuario,
  EditarUsuario,
  ListaUsuarios,
  TraerUsuario,
  DesactivarUsuario,
};
