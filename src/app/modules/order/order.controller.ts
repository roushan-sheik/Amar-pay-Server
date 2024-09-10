import { Request, Response } from 'express';
import { orderService } from './order.service';

export const createOrderController = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const newOrder = await orderService.createOrder(orderData);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: newOrder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message,
            error
        });
    }
};

