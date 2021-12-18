"use strict";

// Cargamos el módulo de mongoose
/* var mongoose = require("mongoose");
 */ var mongoose = require("../connection/Connection");

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y tendrá dos campos de tipo String
var ExamenesSchema = Schema({
  especialidad: String,
  nombre_examen: String,
  frecuencia: String,
  sede: String,
  estado: String,
  requerimientos: String,
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model("Examenes", ExamenesSchema);
