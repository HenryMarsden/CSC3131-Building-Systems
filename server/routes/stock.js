import express from "express";
import getTime from "../controllers/stock.js";

const router = express.Router();

//stock routes
router.get("/:ticker", getTime);

export default router;