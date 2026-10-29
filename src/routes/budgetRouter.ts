
const router = Router();

router.get('/', BudgetController.getBudgets);
router.get('/:id', BudgetController.getBudgetById);

router.put('/:id', BudgetController.updateBudget);
router.delete('/:id', BudgetController.deleteBudget);

export default router;