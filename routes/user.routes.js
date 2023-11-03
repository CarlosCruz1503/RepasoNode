import express from "express";

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.json({ msg: "Hola soy el router de usuarios" })
})

userRouter.get("/", (req, res) => {
    res.json({ msg: "" })
})

export default userRouter