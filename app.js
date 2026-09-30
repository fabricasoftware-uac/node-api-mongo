const express = require('express')
const show_routes = require('./routes/parejas')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'node-api-mongo',
    version: '1.0.0',
    description: "El registro del 'pasado': API para documentar relaciones y personas importantes que han dejado huella en nuestras vidas",
    author: 'Salomon Montilla',
    database: 'pasado',
    status: 'online'
  })
})
app.use('/api/parejas', show_routes)

module.exports = app