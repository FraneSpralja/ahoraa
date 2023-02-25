import express from 'express';

import { 
    agregarGasto,
    obtenerGasto 
} from '../controllers/gastoDiarioControllers.js';
import checkAuth from "../middleware/authMiddleware.js"

const router = express.Router();

router.route('/')
    .post(checkAuth, agregarGasto)
    .get(checkAuth, obtenerGasto)

export default router;