let Pareja = require('../models/pareja')

const controller = {
  getParejas: function (req, res) {
    Pareja.find({}).exec()
      .then(parejasList => {
        if (!parejasList) return res.status(404).send({message: "No data found"})
        return res.status(200).json(parejasList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
  getPareja: function (req, res) {
    let parejaId = req.params.id
    if (parejaId == null) return res.status(404).send({message: "pareja not found"})

    Pareja.findById(parejaId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "pareja not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
  },
  savePareja: function (req, res) {
    const {
      nombre,
      edad,
      mensaje,
      apodo,
      fechaInicio,
      fechaFin,
      leccionAprendida,
      impacto,
      cancion,
      lugarFavorito,
      cualidades
    } = req.body

    if (nombre && edad !== undefined && edad !== null) {
      let pareja = new Pareja({
        nombre,
        edad,
        mensaje,
        apodo,
        fechaInicio,
        fechaFin,
        leccionAprendida,
        impacto,
        cancion,
        lugarFavorito,
        cualidades
      })
      
      pareja.save()
        .then(storedpareja => {
          storedpareja
            ? res.status(200).json({pareja: storedpareja})
            : res.status(404).send({message: "Error saving the document"})
        })
        .catch(error => res.status(500).send({message: "Error while saving the document"}))
    } else {
      return res.status(400).send({message: "Data is not right"})
    }
  },
  updatePareja: function (req, res) {
    let parejaId = req.params.id
    let update = req.body

    Pareja.findByIdAndUpdate(parejaId, update, { returnDocument: 'after', runValidators: true })
      .then(updatedpareja => {
        if(!updatedpareja) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({pareja: updatedpareja})
      })
      .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
  },
  deletePareja: function (req, res) {
    let parejaId = req.params.id

    Pareja.findByIdAndRemove(parejaId)
      .then(removedpareja => {
        if (!removedpareja) return res.status(404).send({message: "The pareja does not exist"})
        return res.status(200).send({pareja: removedpareja})
      })
      .catch(err => res.status(500).send({message: "Error while deleting"}))
  }
}

module.exports = controller