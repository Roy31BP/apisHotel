"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ClienteSchema = new _mongoose["default"].Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido1: {
    type: String,
    required: true
  },
  apellido2: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  fecha_nacimiento: {
    type: Date,
    required: true
  },
  profile_image: {
    type: String
  }
}); // Método para comparar contraseñas

ClienteSchema.methods.comparePassword = function _callee(password) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _bcryptjs["default"].compare(password, this.password));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
};

var Cliente = _mongoose["default"].model("Cliente", ClienteSchema);

var _default = Cliente;
exports["default"] = _default;