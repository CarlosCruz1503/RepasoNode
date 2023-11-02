import express from "express"

const app = express()

const router = express.Router();
const routerBase = express.Router();

// const prueba = (req, res) => {
//     res.json({ "msg": "Estoy Funcionando" })
// }

router.get('/prueba', (req, res) => {
    res.json({ "msg": "Estoy Funcionando" })
})
router.get('/messi', (req, res) => {
    res.json({ "msg": "Messi tiene 8 balones de oro" })
})

routerBase.get('/prueba_base', (req, res) => {
    res.json({ "msg": "Esta es una prueba" })
})

app.use('/api', router)
app.use('/base', routerBase)

app.listen(3000, () => {
    console.log("Hola me estoy ejecutando")
})

