import express from "express";
import { getLedStatus, updateLedState, toggleLed } from "./controllers/ledController.js";

const router = express.Router();

router.get("/ledState", getLedStatus);
router.post("/update", updateLedState);
router.post("/toggleLed", toggleLed);

export default router;

