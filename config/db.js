import mongoose from "mongoose";

const connectMoongo = async () => {
    await mongoose.connect("mongodb+srv://carlosjose445566:VBy7nB9dwhc3IJUb@repasonode.vamy0dg.mongodb.net/repasoNode?retryWrites=true&w=majority", {})
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