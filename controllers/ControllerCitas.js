var citas = require("../models/Citas");

async function AgendarCita(req, res) {
  console.log(req.body);
  /* return res.json({}) */
  const nueva_cita = await new citas({
    username: req.body.username,
    fecha: req.body.fecha,
    hora: req.body.hora,
    sede: req.body.sede,
    tipo_examen: req.body.tipo_examen,
    observaciones: req.body.observaciones,
  }).save();
  return res.json(nueva_cita);
}

async function ReagendarCita(req, res) {
  console.log(req.body);
  var actualizarCita = await citas.findByIdAndUpdate(
    req.body._id,
    {
      username: req.body.username,
      fecha: req.body.fecha,
      hora: req.body.hora,
      sede: req.body.sede,
      tipo_examen: req.body.tipo_examen,
      observaciones: req.body.observaciones,
    },
    { new: true }
  );

  return res.json(actualizarCita);
}

async function ListaCitas(req, res) {
  const buscarCitas = await citas.find();

  return res.json(buscarCitas);
}

async function TraerCita(req, res) {
  const buscarCita = await citas.findById(req.body.id);

  return res.json(buscarCita);
}

async function CancelarCita(req, res) {
  const cancelarCita = await citas.findById(req.body.id);
  if (desactivarUsuario) {
    await cancelarCita
      .set({
        estado: cancelarCita.estado == "activo" ? "inactivo" : "activo",
      })
      .save();
    return res.json(cancelarCita);
  } else {
    return res.send("Usuario no encontrado");
  }
}

module.exports = {
  AgendarCita,
  ReagendarCita,
  ListaCitas,
  TraerCita,
  CancelarCita,
};
