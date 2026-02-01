const scanService = require("../services/scan.service");

exports.scanTarget = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "URL é obrigatória"
    });
  }

  const result = await scanService.executeScan(url);
  return res.json(result);
};
