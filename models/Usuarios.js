"use strict";

// Cargamos el módulo de mongoose
/* var mongoose = require("mongoose");
 */ var mongoose = require("../connection/Connection");

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y tendrá dos campos de tipo String
var UsuariosSchema = Schema({
  rol: String,
  tipo_document: String,
  num_document: Number,
  nombres: String,
  apellidos: String,
  sexo: String,
  email: String,
  username: String,
  password1: String,
  password2: String,
  estado: String,
  condiciones: Boolean,
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model("Usuario", UsuariosSchema);
