const express=require("express")
const paymentrouter = express.Router();
const {
  checkout,
  paymentverification,
  key
} = require("../controller/paymentcontroller"); 

paymentrouter.route("/checkout").post(checkout);
paymentrouter.route("/paymentverification").post(paymentverification);
paymentrouter.route("/getkey").get(key);







module.exports = paymentrouter