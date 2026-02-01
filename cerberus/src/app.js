const express = require("express");
const scanRoutes = require("./routes/scan.routes");

const app = express();

app.use(express.json());
app.use(scanRoutes);

module.exports = app;
