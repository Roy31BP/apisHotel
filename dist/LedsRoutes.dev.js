"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/ledController"),
    getStatus = _require.getStatus,
    toggleLed = _require.toggleLed,
    setTimer = _require.setTimer;

router.get("/status", getStatus);
router.post("/toggle", toggleLed);
router.post("/timer", setTimer);
module.exports = router;