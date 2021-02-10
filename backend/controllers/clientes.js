const fs = require('fs')
const data = require("../data.json")



//index
exports.index = function (req, res) {

    return res.send( data )
}

//show
exports.show = function (req, res) {

    const { id } = req.params

    const foundCliente = data.find(function (cliente) {
        return cliente.id == id
    })

    if (!foundCliente) return res.send("cliente não encontrado")
    
    
    return res.send(foundCliente)
}

//post
exports.post = function (req, res) {

    // const keys = Object.keys(req.body)

    // for (key of keys) {

    //     if (req.body[key] == "") {
    //         return res.send("Preencha todos os campos!!!")
    //     }

    // }

    let { name, age, cpf, phone, email} = req.body
    
    let id = 1
    const lastCliente = data[data.length - 1].id

    if (lastCliente) {
        id = lastCliente + 1
    }


    data.push({
        id,
        name,
        age,
        cpf,
        phone,
        email,
    })

    console.log(data)
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
      
        if (err) {

            return res.send("erro ao escrever dados!")
        }

        return res.redirect("/clientes")
    })

    // return res.send(req.body)
}