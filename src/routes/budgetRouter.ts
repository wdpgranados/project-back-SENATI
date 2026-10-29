import express, {Router} from "express";
import {BudgetController} from "../controllers/BudgetController";
import {body} from "express-validator";
import {handleInputvalidation} from "../middleware/validation";
const router = Router();

router.get('/', BudgetController.getBudgets);
router.get('/:id', BudgetController.getBudgetById);

router.post('/',
    body('name').notEmpty().withMessage('Name is required'),
    body('amount')
        .notEmpty().withMessage('Amount is required')
        .isNumeric().withMessage('Amount must be a number')
        .isFloat({ gt: 0 }).withMessage('Amount must be a positive number')
        .custom((value, { req }) => {
            if (value <= 0) {
                throw new Error('Amount must be a positive number');
            }
            return true;
        }),
    handleInputvalidation,
    BudgetController.createBudget
);



router.put('/:id', BudgetController.updateBudget);
router.delete('/:id', BudgetController.deleteBudget);

export default router;