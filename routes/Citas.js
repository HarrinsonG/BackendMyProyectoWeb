var citas = require("../controllers/ControllerCitas");

function RoutesCitas(app) {
  app.post("/crearCita", citas.AgendarCita);
  app.post("/reagendarCita", citas.ReagendarCita);
  app.post("/listaCitas", citas.ListaCitas);
  app.post("/traerCita", citas.TraerCita);
  app.post("/cancelarCita", citas.CancelarCita);
}

module.exports = RoutesCitas;
