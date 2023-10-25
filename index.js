const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const xeRoute = require("./routes/xe");
const SoDatXeRouter = require("./routes/sodatxe");

//Connete database
dotenv.config();

// mongoose.set("strictQuery", false);
mongoose.connect((process.env.MONGODB_URL),() =>{
    try {
        console.log("Đã kết nối database");
    } catch (error) {
        console.log("kết nối thất bại");
    }
    
});
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));


app.use("/xe",xeRoute);
app.use("/SoDatXe",SoDatXeRouter);



app.listen(8000, () => {
    console.log("server is running");
});




