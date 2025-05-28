const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const productRouter = require('./routes/products.routes')
const userRouter = require('./routes/users.routes')
app.use('/productos', productRouter)
app.use('/usuarios', userRouter)

app.listen(port, () => {
  console.log(`Servidor corriendo en localhost:${port}`)
})
