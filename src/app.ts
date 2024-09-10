import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import connectDB from "./app/config/db";
import { seedProducts } from "./app/config/seed";
import { orderRoutes } from "./app/modules/order/order.routes";
import { paymentRoutes } from "./app/modules/payment/payment.routes";
import { productRoutes } from "./app/modules/product/product.routes";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/payment", paymentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Server is running!",
    status: "success",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    version: "v1.0.0",
  });
});

connectDB();
seedProducts();

export default app;
