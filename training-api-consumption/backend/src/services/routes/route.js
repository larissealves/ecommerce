import express from "express";

import { fetchDriversAPI } from "../api/v1/get/drivers.js";

const router = express.Router();

router.get(`/drivers`, async (req, res) => {
  try {
    const drivers = await fetchDriversAPI();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: "[Backend]: Erro ao se conectar a API." });
  }
});

export default router;
