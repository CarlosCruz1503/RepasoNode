import usersModel from "../models/users.model.js"

export const userGet = async (req, res) => {
    let users = await usersModel.find()
    return res.send(users)
}

export const userPost = async (req, res) => {
    let userData = req.body
    let newUser = await usersModel.create(userData)
    return res.json(newUser)
}