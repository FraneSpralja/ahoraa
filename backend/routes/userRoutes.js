import express from "express";

import {
    registrar
} from "../controllers/userControllers.js";

const router = express.Router();

router.post('/', registrar);

export default router;