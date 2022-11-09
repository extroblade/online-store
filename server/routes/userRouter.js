const Router = require('express')
const router = new Router()
const userController = require('../controllers/userContoller')


router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/auth', userController.isAuth)


module.exports = router