var examenes = require("../controllers/ControllerExamenes");

function RoutesExamenes(app) {
  app.post("/crearExamen", examenes.CrearExamen);
  app.post("/editarExamen", examenes.EditarExamen);
  app.post("/listaExamenes", examenes.ListaExamenes);
  app.post("/traerExamen", examenes.TraerExamen);
  app.post("/desactivarExamen", examenes.DesactivarExamen);

  
}

module.exports = RoutesExamenes;
