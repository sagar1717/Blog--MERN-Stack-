import mongoose from "mongoose";

const Connection = async () => {
    try {
        const URL = "mongodb+srv://sagar246:Sagar@123@blogweb.0b7dn.mongodb.net/Blog?retryWrites=true&w=majority"

        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
        console.log("Connected successfully");

    } catch (error) {
        console.log(error);
    }
}

export default Connection;