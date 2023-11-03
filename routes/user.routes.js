import express from "express";
import usersModel from "../models/users.model.js";
import { userGet, userPost } from "../controllers/user.controllers.js";
const userRouter = express.Router()

userRouter.get("/", userGet)

userRouter.post("/", userPost)

userRouter.put("/update/:_id", async (req, res) => {
    try {
        let dataForUpdate = req.body
        let idForUpdate = req.params._id
        let userUpdate = await usersModel.findByIdAndUpdate(idForUpdate, dataForUpdate)
        return res.json({ msg: "Actualizado correctamente" })
    } catch (e) {
        return res.json({ error: e })
    }
})
userRouter.put("/updateForName/:name", async (req, res) => {
    let dataForUpdate = req.body
    let nameForUpdate = req.params.name
    let userUpdate = await usersModel.findOneAndUpdate({ name: nameForUpdate }, dataForUpdate)
    console.log(userUpdate)
    if (userUpdate) {
        return res.json({ msg: "Actualizado correctamente" })
    } else {
        return res.json({ msg: "No actualice nada" })
    }
})

userRouter.delete("/delete/:_id", async (req, res) => {
    try {
        let idForDelete = req.params._id
        let userDelete = await usersModel.findByIdAndDelete(idForDelete)
        if (userDelete) {
            return res.json({ msg: "Eliminado Correctamente" })
        } else {
            return res.json({ msg: "No elimine nada" })
        }

    } catch (e) {
        return res.json({ error: e })
    }
})

export default userRouter