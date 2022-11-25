const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandContoller')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole("ADMIN"), brandController.create)
router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)
router.delete('/:id', checkRole("ADMIN"), brandController.deleteOne)

module.exports = router
