import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const initiatePayment = async () => {
  const response = await axios.post(process.env.PAYMENT_URL!, {
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    tran_id: "arifa1234",
    success_url: "http://www.merchantdomain.com/sucesspage.html",
    fail_url: "http://www.merchantdomain.com/failedpage.html",
    cancel_url: "http://www.merchantdomain.com/cancellpage.html",
    amount: "10.0",
    currency: "BDT",
    desc: "Merchant Registration Payment",
    cus_name: "Name",
    cus_email: "payer@merchantcusomter.com",
    cus_add1: "House B-158 Road 22",
    cus_add2: "Mohakhali DOHS",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1206",
    cus_country: "Bangladesh",
    cus_phone: "+8801704",
    type: "json",
  });
  console.log(response);
};
