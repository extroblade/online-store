const {Type} = require('../models/models')
const {ApiError} = require('../error/ApiError')


class TypeController {
    async create(req,res){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req,res){
        const types  = await Type.findAll()
        return res.json(types)
    }

    async deleteOne(req,res, next) {
        try {
            let {name} = req.body
            await Type.destroy({where: {name}})
                .then(() => {
                    res.json(name)
                })
            if (!name){
                return next(ApiError.internal("No type"))
            }
        } catch (e) {
            next(ApiError.badRequest(e))
        }

    }

}

module.exports = new TypeController()