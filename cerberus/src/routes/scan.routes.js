const express = require("express");
const router = express.Router();
const scanService = require("../services/scan.service");

router.post("/scan", async (req, res) => {
  const { target } = req.body;

  if (!target) {
    return res.status(400).json({ error: "URL é obrigatória" });
  }

  try {
    const result = await scanService.executeScan(target);
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
