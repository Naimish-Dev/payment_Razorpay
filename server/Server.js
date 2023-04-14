const app = require("./app.js")
const {dbconnect} =require("./models/Db.js")

dbconnect();

app.listen(process.env.PORT,()=>{  console.log("server is also runing on" + process.env.PORT); })











