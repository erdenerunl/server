import Post from "../models/posts.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: true,
            data: {
                posts: posts
            }
        })
    } catch (err) {
        res.status(404).json({
            status: false,
            message: err.message
        })
    }
}
