import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const initiatePayment = async (paymentData: any) => {
  const {
    transactionId,
    totalPrice,
    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
  } = paymentData;
  try {
    const response = await axios.post(process.env.PAYMENT_URL!, {
      store_id: process.env.STORE_ID,
      signature_key: process.env.SIGNATURE_KEY,
      tran_id: transactionId,
      success_url: `http://localhost:7000/api/v1/payment/confirmation?transactionId=${transactionId}&status=success`,
      fail_url: `http://localhost:7000/api/v1/payment/confirmation?status=failed`,
      cancel_url: "http://localhost:5173/",
      amount: totalPrice,
      currency: "BDT",
      desc: "Merchant Registration Payment",
      cus_name: customerName,
      cus_email: customerEmail,
      cus_add1: customerAddress,
      cus_add2: "Khulna",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1206",
      cus_country: "Bangladesh",
      cus_phone: customerPhone,
      type: "json",
    });
    return response.data;
  } catch (error) {
    throw new Error("Payment initiation failed");
  }
};
export const verifyPayment = async (transactionId: string) => {
  try {
    const response = await axios.get(process.env.PAYMENT_VERIFY_URL!, {
      params: {
        store_id: process.env.STORE_ID,
        signature_key: process.env.SIGNATURE_KEY,
        request_id: transactionId,
        type: "json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Payment validation failed");
  }
};
