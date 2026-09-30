const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParejaSchema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  mensaje: { type: String, default: null },
  apodo: { type: String, default: null },
  fechaInicio: { type: Date, default: null },
  fechaFin: { type: Date, default: null },
  leccionAprendida: { type: String, default: null },
  impacto: { type: Number, min: 1, max: 10, default: 5 },
  cancion: { type: String, default: null },
  lugarFavorito: { type: String, default: null },
  cualidades: { type: [String], default: [] }
}, {
  timestamps: true
})

module.exports = mongoose.model('Parejas', ParejaSchema, 'parejas')