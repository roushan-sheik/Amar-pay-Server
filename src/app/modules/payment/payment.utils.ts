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
  const response = await axios.post(process.env.PAYMENT_URL!, {
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    tran_id: transactionId,
    success_url: "http://www.merchantdomain.com/sucesspage.html",
    fail_url: "http://www.merchantdomain.com/failedpage.html",
    cancel_url: "http://www.merchantdomain.com/cancellpage.html",
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
};
