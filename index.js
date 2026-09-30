let mongoose = require('mongoose')
const app = require('./app')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/pasado')
  .then(() => {
    console.log('Database connected successfully')

    app.listen(app.get('port'), () => {
      console.log('===============================================================')
      console.log('📖 API REST node-api-mongo | Colección del \'pasado\'')
      console.log('Desarrollado por: Salomon Montilla')
      console.log('Propósito: Documentar relaciones y personas que dejaron huella')
      console.log(`Servidor activo en: http://localhost:${app.get('port')}`)
      console.log('===============================================================')
    })
  })
  .catch(err => console.error(err))