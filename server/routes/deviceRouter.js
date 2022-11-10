const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceContoller')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
//router.delete('/',)

module.exports = router