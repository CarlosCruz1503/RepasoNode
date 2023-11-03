import mongoose from "mongoose";

const connectMoongo = async () => {
    await mongoose.connect(process.env.DATABASE_URL, {})
    try {
        console.log("Conectado exitosamente")
    } catch (err) {
        console.log("No conectado " + err)
    }
};

// module.exports = {
//     connectMoongo
// }
export default connectMoongo;