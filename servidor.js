const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080
let visitas = 0

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))
app.get('/', (request, response) => {
   response.send("<p style = 'color: red;'>Este es unmensaje de la página principal </p>")
})

app.get('/hora', (request, response) => response.send(new Date().toLocaleTimeString()))

app.get('/visitas', (request, response) => {
   visitas++
   response.send(`Se ha visitado la página ${visitas} veces`)
})

app.get('/otra', (request, response) => {
   response.send({ mensaje: 'hola a todos' })
})




/*
const http = require('http')

const server = http.createServer((peticion, respuesta) => {
   const now = new Date()
   console.log(now.getHours());
   let mensaje = 'Buenas noches'
   if(now.getHours() >= 6 &&  now.getHours() <= 12) mensaje = 'Buenos días';
   else if (now.getHours() > 12 && now.getHours() < 19) mensaje = 'Buenas tardes'
   respuesta.end(mensaje)
})

const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port} / Server running...`)
})
*/