import { Request, Response } from "express";
import Budget from "../models/Budget";

export class BudgetController {
    static getBudgets = async (req: Request, res: Response): Promise<void> => {
        try {
            // Logic to get budgets from the database
            res.status(200).json({ message: "Budgets retrieved successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error retrieving budgets", error });
        }
    }

    static getBudgetById = async (req: Request, res: Response): Promise<void> => {
        try {
            // Logic to get a specific budget by ID from the database
            res.status(200).json({ message: "Budget retrieved successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error retrieving budget", error });
        }
    }

    static createBudget = async (req: Request, res: Response): Promise<void> => {
        try {
            console.log(req.body);

            // Guardar en la base de datos usando la sintaxis de Sequelize
            const budget = await Budget.create(req.body);

            res.status(201).json({
                message: "Budget created successfully",
                data: budget
            });
        } catch (error) {
            console.error("Error en createBudget:", error);
            res.status(500).json({ message: "Error creating budget", error });
        }
    }

    static updateBudget = async (req: Request, res: Response): Promise<void> => {
        try {
            // Logic to update an existing budget in the database
            res.status(200).json({ message: "Budget updated successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error updating budget", error });
        }
    }

    static deleteBudget = async (req: Request, res: Response): Promise<void> => {
        try {
            // Logic to delete a budget from the database
            res.status(200).json({ message: "Budget deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting budget", error });
        }
    }
}