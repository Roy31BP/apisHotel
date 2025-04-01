"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTimer = exports.setLedState = exports.timer = exports.ledState = void 0;
var ledState = "off"; // Estado inicial del LED

exports.ledState = ledState;
var timer = null;
exports.timer = timer;

var setLedState = function setLedState(state) {
  exports.ledState = ledState = state;
};

exports.setLedState = setLedState;

var setTimer = function setTimer(newTimer) {
  if (timer) clearTimeout(timer); // Cancelar el temporizador anterior

  exports.timer = timer = newTimer;
};

exports.setTimer = setTimer;