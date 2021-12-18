"use strict";

// Cargamos el módulo de mongoose
/* var mongoose = require("mongoose");
 */ var mongoose = require("../connection/Connection");

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y tendrá dos campos de tipo String
var EspecialidadesSchema = Schema({
  especialidad: String,
  
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model("Especialidad", EspecialidadesSchema, "especialidades");