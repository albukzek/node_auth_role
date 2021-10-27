const Router = require('express')
const router = new Router()
const controller = require('./authController')
// const authmiddleWaree = require('./middlewaree/authMiddlewaree')
const roleMiddlewaree = require('./middlewaree/roleMiddlewaree')
const {check} = require('express-validator')

router.post('/registration', [
    check('username', "Имя пользователя не заполнено").notEmpty(),
    check('password', "Пароль должен быть не короче 4 и не длиннее 10 символов").isLength({min:4, max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddlewaree(['USER']), controller.getUsers)

module.exports = router