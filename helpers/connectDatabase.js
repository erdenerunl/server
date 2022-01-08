import mongoose from "mongoose";

let options = {
    useNewUrlParser: true
}

const connectDatabase = () => {
    mongoose.connect(process.env.CONNECTION_URL, options)
        .then(() => {
            console.log("MongoDb connected.")
        })
        .catch((err) => {
            console.error(err);
        })
}

export default  connectDatabase;