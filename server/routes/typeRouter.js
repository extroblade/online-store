const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeContoller')


router.post('/', typeController.create)
router.get('/', typeController.getAll)
//router.delete('/',)

module.exports = router