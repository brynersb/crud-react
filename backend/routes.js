const express = require('express')
const routes = express.Router()
const clientes = require('./controllers/clientes')



routes.get('/', function (req, res) {
    return res.send("funcionou!!!")

})

routes.get('/clientes/', clientes.index)

routes.get('/cliente/:id', clientes.show)

routes.post("/clientes/", clientes.post)




module.exports = routes