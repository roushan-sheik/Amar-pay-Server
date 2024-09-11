import { readFileSync } from "fs";
import { join } from "path";
import orderModel from "../order/order.model";
import { verifyPayment } from "./payment.utils";

const confirmationService = async (transactionId: string, status: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  let result;
  let message = "";
  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    result = await orderModel.findOneAndUpdate(
      { transactionId },
      {
        paymentStatus: "Paid",
      }
    );
    message = "Successfully Paid";
  } else {
    message = "Payment failed";
  }
  const filePath = join(__dirname, "../../../view/confirmation.html");
  console.log("filePath", filePath);
  let template = readFileSync(filePath, "utf-8");
  template = template.replace("{{message}}", message);

  return template;
};
export const paymentService = {
  confirmationService,
};
