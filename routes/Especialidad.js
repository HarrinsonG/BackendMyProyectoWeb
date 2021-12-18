var especialidad = require("../controllers/ControllerEspecialidad");

function RoutesEspecialidades(app) {
  app.post("/crearEspecialidad", especialidad.CrearEspecialidad);
  app.post("/editarEspecialidad", especialidad.EditarEspecialidad);
  app.post("/listaEspecialidad", especialidad.ListaEspecialidades);
  app.post("/traerEspecialidad", especialidad.TraerEspecialidad);
  app.post("/desactivarEspecialidad", especialidad.DesactivarEspecialidad);
}

module.exports = RoutesEspecialidades;
