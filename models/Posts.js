import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
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

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;