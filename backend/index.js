import express from "express";
import dotenv from "dotenv";

import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import gastoDiarioRoutes from "./routes/gastoDiarioRoutes.js"

const app = express();
app.use(express.json());
dotenv.config()

conectarDB()

app.use('/api/user', userRoutes)
app.use('/api/gasto-diario', gastoDiarioRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(` servidor funcionando en puerto ${PORT}`)
})