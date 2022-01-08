import express from "express";
import bodyParser from "body-parser";
import  mongoose  from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./helpers/connectDatabase.js";

const port  = process.env.PORT;
const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

connectDatabase();

app.get("/", (req, res) => {
    res.send("initial route")
});

// const {PORT, CONNECTION_URL} = process.env;


app.listen(port, () => {
    console.log(port)
    console.log("Server started at" + port);
})