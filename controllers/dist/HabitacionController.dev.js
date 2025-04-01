"use strict";

var Habitacion = require('../models/Habitacion.js'); // Obtener todos los clientes


var getHabitacion = function getHabitacion(req, res) {
  var habitaciones;
  return regeneratorRuntime.async(function getHabitacion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Habitacion.find());

        case 3:
          habitaciones = _context.sent;
          res.json(habitaciones);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: 'Error al obtener los clientes',
            details: _context.t0
          });

        case 10:
          module.exports = {
            getHabitacion: getHabitacion
          };

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};