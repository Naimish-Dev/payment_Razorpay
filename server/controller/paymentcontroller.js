const env = require("dotenv").config();

const razorpay = require("razorpay");
const {RazorpayModule}=require("../models/Db")
const instance = new razorpay({
  key_id: process.env.RAZORPAY_key_id,
  key_secret: process.env.RAZORPAY_key_secret,
});

const checkout = async (req, res) => {
  try {
    const resdata = await instance.orders.create({
      amount: 3000 * 100,
      currency: "INR",
    });

    res.send({ sucess: true, data: resdata });
  } catch (error) {
    res.send({ sucess: false, data: error });
  }
};

var { validatePaymentVerification} = require("../node_modules/razorpay/dist/utils/razorpay-utils");

const paymentverification = async (req, res) => {
  ({razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body)
  try {
    const ststus = await validatePaymentVerification(
      { order_id: razorpay_order_id, payment_id: razorpay_payment_id }, razorpay_signature, process.env.RAZORPAY_key_secret );
    if (ststus) {
      
     const data = await new RazorpayModule({
       razorpay_order_id,
       razorpay_payment_id,
       razorpay_signature,
     });
     const responce = await data.save()
      // store razorpay_payment_id, razorpay_order_id, razorpay_signature are in data base 
      
      if (responce){

        res.redirect(
          `http://localhost:3000/paymentsucessfull?reference=${razorpay_payment_id}`
        );
      }else{
        res.send({ sucess: false, status: 400 });
      }
    } else {
      res.send({ sucess: false, status: 400 });
    }
  } catch (e) {
    console.log("paymentverification" + e);
  }
};

const key = async (req, res) => {
  try {
    res.send({ sucess: true, key: process.env.RAZORPAY_key_id });
  } catch (error) {
    res.send({ sucess: false, data: error });
  }
};

module.exports = { checkout, paymentverification, key };
