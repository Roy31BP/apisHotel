"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Configurar variables de entorno
_dotenv["default"].config();

var app = (0, _express["default"])(); // Middleware

app.use(_express["default"].json()); // Para recibir datos JSON

app.use((0, _cors["default"])()); // Habilita CORS para todas las rutas
// Conectar a MongoDB

_mongoose["default"].connect(process.env.MONGO_URI, {}).then(function () {
  return console.log("✅ Conectado a MongoDB");
})["catch"](function (error) {
  return console.log("❌ Error al conectar a MongoDB:", error);
}); // Rutas


app.use("/api", _routes["default"]); // Rutas para los clientes // Rutas para led
// Iniciar servidor

var PORT = process.env.PORT || 5000;
var ip = '192.168.100.100'; // Sustituye con la IP de tu red local

app.listen(PORT, ip, function () {
  return console.log("\uD83D\uDE80 Servidor corriendo en http://".concat(ip, ":").concat(PORT));
});