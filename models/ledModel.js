export let ledState = "off";  // Estado inicial del LED
export let timer = null;

export const setLedState = (state) => {
  ledState = state;
};

export const setTimer = (newTimer) => {
  if (timer) clearTimeout(timer); // Cancelar el temporizador anterior
  timer = newTimer;
};
