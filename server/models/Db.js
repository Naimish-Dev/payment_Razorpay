const mongoose=require("mongoose")

 const dbconnect = async ()=>{
   const { connection } = await mongoose.connect(process.env.MONGOOSE_URI);
   console.log(`mongodb connected with ${connection}`);

} 


const razorpaySchema = mongoose.Schema({
  razorpay_order_id:{type:String,required:true},
  razorpay_payment_id:{type:String,required:true},
  razorpay_signature:{type:String,required:true},
});


const RazorpayModule = mongoose.model("Razorpay", razorpaySchema);


module.exports = { dbconnect, RazorpayModule };