const {Brand} = require('../models/models')
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

    async deleteOne(req,res, next) {
        try {
            let {name} = req.body
            await Brand.destroy({where: {name}})
                .then(() => {
                    res.json(name)
                })
            if (!name){
                return next(ApiError.internal("No brand"))
            }
        } catch (e) {
            next(ApiError.badRequest(e))
        }

    }

}

module.exports = new BrandController()