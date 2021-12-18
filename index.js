const express = require('express')
const cors = require("cors")

const app = express()
const port = 8000

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=> {
    res.json({
        mensaje: "prueba"
    })
})

require("./routes/Usuarios")(app)
require("./routes/Especialidad")(app)
require("./routes/Examenes")(app)
require("./routes/Citas")(app)

app.listen(port, ()=>{
    console.log('Servidor listo para su uso')
})