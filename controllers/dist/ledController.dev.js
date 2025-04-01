"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLedTimeout = exports.turnOffLed = exports.turnOnLed = exports.getLedState = void 0;

var _ledModel = require("../models/ledModel.js");

// controllers/ledController.js
// Obtener el estado actual del LED
var getLedState = function getLedState(req, res) {
  res.send({
    ledState: _ledModel.ledState
  });
}; // Encender el LED manualmente


exports.getLedState = getLedState;

var turnOnLed = function turnOnLed(req, res) {
  (0, _ledModel.setLedState)("on");
  (0, _ledModel.setTimer)(null); // Cancelar cualquier temporizador activo

  res.send("LED Encendido");
}; // Apagar el LED manualmente


exports.turnOnLed = turnOnLed;

var turnOffLed = function turnOffLed(req, res) {
  (0, _ledModel.setLedState)("off");
  (0, _ledModel.setTimer)(null);
  res.send("LED Apagado");
}; // Encender con temporizador


exports.turnOffLed = turnOffLed;

var setLedTimeout = function setLedTimeout(req, res) {
  var seconds = parseInt(req.params.seconds);
  (0, _ledModel.setLedState)("on");
  (0, _ledModel.setTimer)(setTimeout(function () {
    (0, _ledModel.setLedState)("off");
  }, seconds * 1000));
  res.send("LED Encendido por ".concat(seconds, " segundos"));
};

exports.setLedTimeout = setLedTimeout;