import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    }
})

export default mongoose.model('user', userModel);