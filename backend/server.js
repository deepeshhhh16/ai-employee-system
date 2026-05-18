
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes =
require("./routes/authRoutes");


const employeeRoutes =
require("./routes/employeeRoutes");
const aiRoutes =
require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees",employeeRoutes);

app.use("/api/ai",aiRoutes);

app.use("/api/auth",authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
});

app.get("/",(req,res)=>{
    res.send("API Running");
});

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});