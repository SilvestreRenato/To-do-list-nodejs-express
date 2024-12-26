const express = require("express")
const path = require("node:path")
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render("welcome")
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado com sucesso!\nPorta http://localhost:${PORT}`))
