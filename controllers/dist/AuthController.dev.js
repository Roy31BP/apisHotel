"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfileById = void 0;

var updateProfileById = function updateProfileById(req, res) {
  var id, updates, salt, cliente;
  return regeneratorRuntime.async(function updateProfileById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Obtener el ID del usuario desde los parámetros de la URL
          id = req.params.id;

          if (id) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "ID del usuario no proporcionado"
          }));

        case 4:
          // Obtener los datos enviados para la actualización
          updates = req.body;

          if (Object.keys(updates).length) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "No se proporcionaron datos para actualizar"
          }));

        case 7:
          if (!updates.password) {
            _context.next = 14;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 10:
          salt = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(bcrypt.hash(updates.password, salt));

        case 13:
          updates.password = _context.sent;

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(Cliente.findByIdAndUpdate(id, // ID del usuario
          {
            $set: updates
          }, // Aplicar los cambios enviados
          {
            "new": true,
            runValidators: true
          } // Retornar el documento actualizado y validar datos
          ));

        case 16:
          cliente = _context.sent;

          if (cliente) {
            _context.next = 19;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            error: "Usuario no encontrado"
          }));

        case 19:
          res.status(200).json({
            message: "Perfil actualizado exitosamente",
            user: cliente
          });
          _context.next = 26;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            error: "Error al actualizar el perfil"
          });

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

exports.updateProfileById = updateProfileById;