const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = new express();
dotenv.config();
const Auth=require("./Routes/Auth.js");
const Users=require("./Routes/Users.js");

app.use(express.json());
app.use("/auth/api",Auth);
app.use("/api/users",Users);



const connect = () => {
    console.log("connect function called");
    return mongoose.connect(process.env.MONGO_URL);
};
app.listen(8000, async () => {
    try {
        await connect();
        console.log("server is running at port 8000");
    } catch (error) {
        console.log("something went wrong");
    }
});