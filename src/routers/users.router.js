const router = require('express').Router()
const userController = require('../controllers/users.controller.js')

router.post('/', userController.createUser)

module.exports = router