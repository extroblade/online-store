const {Brand, Type} = require('../models/models')
const ApiError = require("../error/ApiError");

class BrandController {
    async create(req, res){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res){
        const brands  = await Brand.findAll()
        return res.json(brands)
    }

    async getOne(req,res){
        const {id} = req.params
        const brand = await Brand.findOne({where: {id}})
        return res.json(brand)
    }

    async deleteOne(req,res, next) {
        try {
            let {id} = req.params
            await Brand.destroy({where: {id}})
                .then(() => {
                    res.json(id)
                })
            if (!id){
                return next(ApiError.internal("No brand"))
            }
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }


}

module.exports = new BrandController()
