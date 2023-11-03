import express from "express"
import connectMoongo from "./config/db.js";
import userRouter from "./routes/user.routes.js";

const app = express()
connectMoongo()
app.use(express.json());

app.use('/user', userRouter)
// app.use('/base', routerBase)

app.listen(3000, () => {
    console.log("Hola me estoy ejecutando")
})

