import orderModel from "../order/order.model";
import { verifyPayment } from "./payment.utils";

const confirmationService = async (transactionId: string) => {
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

  return result;
};
export const paymentService = {
  confirmationService,
};
