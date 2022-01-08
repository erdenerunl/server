import express from "express";
import bodyParser from "body-parser";
import  mongoose  from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./helpers/connectDatabase.js";
import postsRoute from "./routes/posts.js";

const app = express();
dotenv.config();
const port  = 5000;

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

connectDatabase();


// Routes
app.use("/posts", postsRoute)
app.get("/", (req, res) => {
    res.send("initial route")
});


app.listen(port, () => {
    console.log("Server started at " + port);
})