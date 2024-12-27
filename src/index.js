const express = require("express")
const path = require("node:path")
const router = require("./routes")

const app = express()

// configuracao do ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// configuracao de arquivos estaticos
app.use(express.static('public'))

// configuracao para ler dados da requisicao
app.use(express.urlencoded({ extended: true }))

// Rotas da aplicacao
app.use(router)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado com sucesso!\nPorta http://localhost:${PORT}`))
