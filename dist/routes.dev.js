"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _AuthController = require("./controllers/AuthController.js");

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Controlador de autenticación
var router = _express["default"].Router();

var upload = (0, _multer["default"])({
  dest: "./uploads"
}); // Rutas de autenticación

router.post("/register", _AuthController.register); // Ruta de registro

router.post("/login", _AuthController.login);
router.get("/perfil", _AuthController.getProfile);
router.put("/perfil/:id", _AuthController.updateProfileById); // Actualizar perfil

var _default = router;
exports["default"] = _default;