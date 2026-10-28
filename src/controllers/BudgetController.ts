import {Request, Response} from "express";
import Budget from "../models/Budget";

export class BudgetController {
    static getBudgets = async (req: Request, res: Response): Promise<void> => {

        try {
            // Logic to get budgets from the database
            const {Op} = require("sequelize");
            const filter = req.query.filter || '';

            const budgets = await Budget.findAll({
                attributes: ['name', 'amount', 'createdAt', 'updatedAt'],
                order: [['createdAt', 'DESC']],
                limit: 10,
                where: {
                    name: {
                        [Op.like]: `%SENATI%`
                    },
                    amount: {
                        [Op.gt]: 50
                    }
                }
            });
            res.status(200).json({ message: "Budgets retrieved successfully", data: budgets });
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
        console.log(req.body);
        try {
            const budgetData = new Budget(req.body);
            await budgetData.save();
            res.status(201).json({ message: "Budget created successfully" });
        } catch (error) {
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