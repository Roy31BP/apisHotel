"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose'); // Definir el esquema de Habitacion en Mongoose


var HabitacionSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: true
  },
  piso: {
    type: String,
    required: true
  },
  cupo: {
    type: Number,
    required: true
  },
  detalle: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
}, {
  collection: "habitaciones"
}); // Para manejar createdAt y updatedAt automáticamente
// Crear el modelo de Habitacion

var Habitacion = mongoose.model("Habitacion", HabitacionSchema);
var _default = Habitacion;
exports["default"] = _default;