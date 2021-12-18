var usuarios = require("../controllers/ControllerUsuarios");

function RoutesUsuarios(app) {
  app.post("/crearUsuario", usuarios.RegistrarUsuario);
  app.post("/editarUsuario", usuarios.EditarUsuario);
  app.post("/listaUsuarios", usuarios.ListaUsuarios);
  app.post("/traerUsuario", usuarios.TraerUsuario);
  app.post("/desactivarUsuario", usuarios.DesactivarUsuario);
}

module.exports = RoutesUsuarios;
