import express, {Router} from "express";
import {BudgetController} from "../controllers/BudgetController";
import {body, param} from "express-validator";
import {handleInputvalidation} from "../middleware/validation";
const router = Router();

router.get('/', BudgetController.getBudgets);
router.get('/:id',
    param('id').isInt().withMessage('ID must be an integer'),
    param('id').custom((value) => {
        if (value <= 0) {
            throw new Error('ID must be a positive integer');
        }
        return true;
    }),
    handleInputvalidation,
    BudgetController.getBudgetById);

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

router.put('/:id',
    param('id').isInt().withMessage('ID must be an integer'),
    param('id').custom((value) => {
        if (value <= 0) {
            throw new Error('ID must be a positive integer');
        }
        return true;
    }),
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
    BudgetController.updateBudget
);

router.delete('/:id',
    param('id').isInt().withMessage('ID must be an integer'),
    param('id').custom((value) => {
        if (value <= 0) {
            throw new Error('ID must be a positive integer');
        }
        return true;
    }),
    handleInputvalidation,
    BudgetController.deleteBudget
);

export default router;