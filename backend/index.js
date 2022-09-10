const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = new express();
const cors=require("cors");
dotenv.config();

const AuthRoute =require("./Routes/Auth.js");
const UsersRoute=require("./Routes/Users.js");
const MoviesRoute =require("./Routes/Movies");
const ListsRoute =require("./Routes/Lists");

app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/users", UsersRoute);
app.use("/api/movies", MoviesRoute);
app.use("/api/lists", ListsRoute);



const connect = () => {
    console.log("connect function called");
    return mongoose.connect(process.env.MONGO_URL);
};
app.listen(process.env.PORT, async () => {
    try {
        await connect();
        console.log("server is running at port 8000");
    } catch (error) {
        console.log("something went wrong");
    }
});