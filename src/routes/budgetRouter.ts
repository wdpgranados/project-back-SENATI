import { Router } from "express";

const router: Router = Router();

router.get('/', (req, res) => {
    res.send('Budget route is working!');
});

export default router;