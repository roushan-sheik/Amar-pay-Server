import { Router } from 'express';
import { createOrderController } from './order.controller';

const router = Router();

// Route to create an order
router.post('/create', createOrderController);

export const orderRoutes = router;
