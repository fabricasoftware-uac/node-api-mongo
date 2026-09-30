const { Router } = require('express')
const ParejaController = require('../controllers/parejas')

const router = Router()

router.get('/', ParejaController.getParejas)
router.get('/:id?', ParejaController.getPareja)
router.post('/save-pareja', ParejaController.savePareja)
router.put('/edit-pareja/:id?', ParejaController.updatePareja)
router.delete('/delete-pareja/:id?', ParejaController.deletePareja)

module.exports = router