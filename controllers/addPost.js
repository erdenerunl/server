import Post from "../models/Posts.js"


export const addPost = async (req, res) => {

    const newPost = new Post(req.body)
    
    try {
        await newPost.save().then(() => {
            res.status(200).json({
                status: true,
                message: "Success"
            })
        })
    } catch (err) {
        res.status(409).json({
            status: false,
            message: err.message
        })
    }
}