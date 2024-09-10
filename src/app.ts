import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import connectDB from './app/config/db';
import { seedProducts } from './app/config/seed';
import { orderRoutes } from './app/modules/order/order.routes';
import { productRoutes } from './app/modules/product/product.routes';
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/product', productRoutes);
app.use('/api/v1/order', orderRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Server is running!",
        status: "success",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development",
        version: "v1.0.0"
    });
});

connectDB();
//seedProducts();

export default app;
