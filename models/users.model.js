import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        default: 18
    }
})

export default mongoose.model('user', userModel);