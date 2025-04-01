// controllers/ledController.js
import { ledState, setLedState, setTimer } from "../models/ledModel.js";

// Obtener el estado actual del LED
export const getLedState = (req, res) => {
  res.send({ ledState });
};

// Encender el LED manualmente
export const turnOnLed = (req, res) => {
  setLedState("on");
  setTimer(null);  // Cancelar cualquier temporizador activo
  res.send("LED Encendido");
};

// Apagar el LED manualmente
export const turnOffLed = (req, res) => {
  setLedState("off");
  setTimer(null);
  res.send("LED Apagado");
};

// Encender con temporizador
export const setLedTimeout = (req, res) => {
  const seconds = parseInt(req.params.seconds);
  setLedState("on");

  setTimer(setTimeout(() => {
    setLedState("off");
  }, seconds * 1000));

  res.send(`LED Encendido por ${seconds} segundos`);
};
