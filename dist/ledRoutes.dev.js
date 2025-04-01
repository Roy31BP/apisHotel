"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ledController = require("./controllers/ledController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/ledState", _ledController.getLedStatus);
router.post("/update", _ledController.updateLedState);
router.post("/toggleLed", _ledController.toggleLed);
var _default = router;
exports["default"] = _default;