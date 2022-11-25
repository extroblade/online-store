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

    async getOne(req,res){
        const {id} = req.params
        const type = await Type.findOne({where: {id}})
        return res.json(type)
    }

    async deleteOne(req,res, next) {
        try {
            let {id} = req.params
            await Type.destroy({where: {id}})
                .then(() => {
                    res.json(id)
                })
            if (!id){
                return next(ApiError.internal("No type"))
            }
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }

}

module.exports = new TypeController()
