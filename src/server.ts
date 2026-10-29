import express from "express";
import "dotenv/config";
import { connecDB } from "./config/db";
import budgetRouter from "./routes/budgetRouter";

const app = express();

// Middleware para procesar JSON (Obligatorio antes de las rutas)
app.use(express.json());

// Conectar a la base de datos de forma asíncrona
async function connect() {
    try {
        await connecDB();
    } catch (error) {
        console.error("Error al conectar a la Base de Datos:", error);
    }
}
connect();

// Rutas
app.use("/api/budgets", budgetRouter);

export default app;