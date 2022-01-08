import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    tag: String,
    image: {
        type: String,
        default: "default.png"
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model("Post", PostSchema);

export default Post;