import orderModel from "../order/order.model";
import { verifyPayment } from "./payment.utils";

const confirmationService = async (transactionId: string, status: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  let result;
  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    result = await orderModel.findOneAndUpdate(
      { transactionId },
      {
        paymentStatus: "Paid",
      }
    );
  }

  return `<h1>Payment ${status}</h1>`;
};
export const paymentService = {
  confirmationService,
};
