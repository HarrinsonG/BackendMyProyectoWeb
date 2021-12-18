const Especialidad = require("../models/Especialidad");
var examenes = require("../models/Examenes");

async function CrearExamen(req, res) {
  console.log(req.body);
  /* return res.json({}) */
  const nuevo_examen = await new examenes({
    especialidad: req.body.especialidad,
    nombre_examen: req.body.nombre_examen,
    frecuencia: req.body.frecuencia,
    sede: req.body.sede,
    estado: req.body.estado,
    requerimientos: req.body.requerimientos,
  }).save();
  return res.json(nuevo_examen);
}

async function EditarExamen(req, res) {
  console.log(req.body);
  var editarExamen = await examenes.findByIdAndUpdate(
    req.body._id,
    {
      especialidad: req.body.especialidad,
      nombre_examen: req.body.nombre_examen,
      frecuencia: req.body.frecuencia,
      sede: req.body.sede,
      requerimientos: req.body.requerimientos,
    },
    { new: true }
  );

  return res.json(editarExamen);
}

async function ListaExamenes(req, res) {
    console.log(req.body)
    const especialidad = {especialidad:req.body.especialidad} || {}
  const buscarExamenes = await examenes.find(especialidad);

  return res.json(buscarExamenes);
}

async function TraerExamen(req, res) {
  const buscarExamen = await examenes.findById(req.body.id).lean();
  const listarEspecialidades = await Especialidad.find().lean();
  buscarExamen.especialidades = listarEspecialidades

  return res.json(buscarExamen);
}

async function DesactivarExamen(req, res) {
  const desactivarExamen = await examenes.findById(req.body.id);
  if (desactivarExamen) {
    await desactivarExamen
      .set({
        estado: desactivarExamen.estado == "activo" ? "inactivo" : "activo",
      })
      .save();
    return res.json(desactivarExamen);
  } else {
    return res.send("Examen no encontrado");
  }
}

module.exports = {
  CrearExamen,
  EditarExamen,
  ListaExamenes,
  TraerExamen,
  DesactivarExamen,
};
