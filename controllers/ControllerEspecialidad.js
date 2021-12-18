var especialidad = require("../models/Especialidad");

async function CrearEspecialidad(req, res) {
  console.log(req.body);
  /* return res.json({}) */
  const nueva_Especialidad = await new especialidad({
    especialidad: req.body.especialidad,
  }).save();
  return res.json(nueva_Especialidad);
}

async function EditarEspecialidad(req, res) {
  console.log(req.body);
  var actualizarEspecialidad = await especialidad.findByIdAndUpdate(
    req.body._id,
    {
      especialidad: req.body.especialidad,
    },
    { new: true }
  );

  return res.json(actualizarEspecialidad);
}

async function ListaEspecialidades(req, res) {
  const buscarEspecialidades = await especialidad.find();

  return res.json(buscarEspecialidades);
}

async function TraerEspecialidad(req, res) {
  const buscarEspecialidad = await especialidad.findById(req.body.id);

  return res.json(buscarEspecialidad);
}

async function DesactivarEspecialidad(req, res) {
  const DesactivarEspecialidad = await especialidad.findById(req.body.id);
  if (DesactivarEspecialidad) {
    await DesactivarEspecialidad.set({
      estado: DesactivarEspecialidad.estado == "activo" ? "inactivo" : "activo",
    }).save();
    return res.json(DesactivarEspecialidad);
  } else {
    return res.send("Especialidad no encontrada");
  }
}

module.exports = {
  CrearEspecialidad,
  EditarEspecialidad,
  ListaEspecialidades,
  TraerEspecialidad,
  DesactivarEspecialidad,
};
