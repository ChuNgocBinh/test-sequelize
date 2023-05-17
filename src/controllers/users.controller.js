const UserModel = require('../models/users.model.js')

const createUser = async (req, res, next) => {
    const { name, email, password } = req.body
    const result = await UserModel.create({ name, email, password })
    res.status(200).send({
        status: 'success',
        data: {
            name, email, password
        }
    })
}
module.exports = {
    createUser
}