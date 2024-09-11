import axios from "axios";
import { Request, Response } from "express";
import { paymentService } from "./payment.service";

export const confirmationController = async (req: Request, res: Response) => {
   await paymentService.confirmationService(
    req.query.transactionId as string
  );
  res.send(`<h1>Payment Success</h1>`);
};
export const paymentController = {
  confirmationController,
};
