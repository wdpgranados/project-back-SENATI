import express, { Express } from "express";
import "dotenv/config";
import { connecDB } from "./config/db";
import budgetRouter from "./routes/budgetRouter";
import path from "node:path";

const app: Express = express();

// Inicializar base de datos
connecDB().then(() => {
    app.use(express.json());

    // Middleware de la ruta de presupuestos
    app.use("/api/budgets", budgetRouter);

}).catch((error) => {
    console.error("Error al iniciar:", error);
});

export default app;