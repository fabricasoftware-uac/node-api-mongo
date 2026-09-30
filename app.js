const express = require('express')
const show_routes = require('./routes/parejas')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/parejas', show_routes)

module.exports = app