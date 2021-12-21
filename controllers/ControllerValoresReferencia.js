var valoresReferencia = require("../models/ValoresReferencia");

async function GuardarValorReferencia(req, res) {
  const new_valorReferencia = await new valoresReferencia({
    especialidad: req.body.especialidad,
    nombre_examen: req.body.nombre_examen,
    valor_referencia: req.body.valor_referencia,
  }).save();
  return res.json(new_valorReferencia);
}

async function EditarValoresReferencia(req, res) {
  console.log(req.body);
  var actualizarValoresReferencia = await valoresReferencia.findByIdAndUpdate(
    req.body._id,
    {
      especialidad: req.body.especialidad,
      nombre_examen: req.body.nombre_examen,
      valor_referencia: req.body.valor_referencia,
    },
    { new: true }
  );

  return res.json(actualizarValoresReferencia);
}

async function ListaValoresReferencia(req, res) {
  const buscarValoresReferencia = await valoresReferencia.find();

  return res.json(buscarValoresReferencia);
}

async function TraerValorReferencia(req, res) {
  const buscarValoresReferencia = await valoresReferencia.findOne({nombre_examen: req.body.nombre_examen});

  return res.json(buscarValoresReferencia);
}

module.exports = {
  GuardarValorReferencia,
  EditarValoresReferencia,
  ListaValoresReferencia,
  TraerValorReferencia,
};
