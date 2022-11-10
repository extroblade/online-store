const ApiError = require('../error/ApiError')

class UserController {
    async register(req,res){

    }

    async login(req,res){

    }

    async isAuth(req,res, next){
        const {id} = req.query
        return !id ? next(ApiError.badRequest('No ID')) : res.json(id)
    }
}

module.exports = new UserController()