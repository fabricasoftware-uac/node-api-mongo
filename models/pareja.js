let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ShowSchema = Schema ({
  nombre: String,
  edad: Number,
  mensaje: String
})

module.exports = mongoose.model('Parejas', ShowSchema, 'parejas')