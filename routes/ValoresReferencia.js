var valoresReferencia = require("../controllers/ControllerValoresReferencia");

function RoutesExamenes(app) {
  
  app.post("/guardarValorReferencia", valoresReferencia.GuardarValorReferencia);
  app.post("/listaValoresReferencia", valoresReferencia.ListaValoresReferencia);
  app.post("/traerValoresReferencia", valoresReferencia.TraerValorReferencia);
  app.post("/editarValoresReferencia", valoresReferencia.EditarValoresReferencia);
}

module.exports = RoutesExamenes;