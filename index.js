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

app.get('/pdf', (req, res)=> {
    const htmlPdf = require('html-pdf');
			const html = "<h1>HTML-PDF IS READY !!!</h1>"
			htmlPdf.create(html, {
				format: 'Tabloid',
				//"height": "8cm",
				//"width": "11cm",
			}).toBuffer(function(error, buffer){
                res.end(buffer)
            })
    
})

require("./routes/Usuarios")(app)
require("./routes/Especialidad")(app)
require("./routes/Examenes")(app)
require("./routes/Citas")(app)
require("./routes/ValoresReferencia")(app)


app.listen(port, ()=>{
    console.log('Servidor listo para su uso')
})