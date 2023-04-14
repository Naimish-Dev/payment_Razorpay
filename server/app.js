const express = require("express")
const cors =require("cors")
const App = express()
const paymentrouter = require("./routes/Paymentroute");


App.use(cors());
App.use(express.json())
App.use(express.urlencoded({extended:true}) )

App.use("/api", paymentrouter);

module.exports = App
