const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Bad Registration or Pass"));
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest("User already exists"));
        }
        const hashPassword = await bcrypt.hash(password, 5)

        const user = await User.create({
            email,
            password: hashPassword,
            role,
        })

        const basket = await Basket.create(
            {userId: user.id}
        )

        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body

        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal("User not found"))
        }

        let comparePass = bcrypt.compareSync(password, user.password)
        if (!comparePass){
            return next(ApiError.internal("Wrong password"))
        }

        const token = generateJWT(user.id, user.email, user.role)

        return res.json({token})
    }

    async isAuth(req,res, next){
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()