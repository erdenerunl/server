import express from "express";
import {getPosts} from "../controllers/getPosts.js";
import {addPost} from "../controllers/addPost.js";

const router = express.Router();

// http:localhost:5000/posts
router.get("/", getPosts);
router.post("/", addPost);


export default router;