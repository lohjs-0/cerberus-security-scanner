const express = require("express");
const router = express.Router();
const scanController = require("../controllers/scan.controller");

router.post("/scan", scanController.scanTarget);

module.exports = router;
