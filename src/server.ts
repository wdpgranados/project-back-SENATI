import express, { Express } from "express";
import "dotenv/config";
import { connecDB } from "./config/db";

const app: Express = express();

// Inicializar base de datos
connecDB().then(() => {
    app.use(express.json());
}).catch((error) => {
    console.error("Error al iniciar:", error);
});

export default app;