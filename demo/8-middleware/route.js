const express = require('express')
const router = express.Router()

const homeController = require('./controllers/home-controller')
const userController = require('./controllers/user-controller')
const authController = require('./controllers/auth-controller')

const AuthMiddleware = require('./middewares/auth-middleware')

// GET method route
router.get('/', homeController.index)

router.post('/login', authController.login)
router.get('/profile', AuthMiddleware, authController.profile)

router.get('/users', AuthMiddleware, userController.index)
router.post('/users', AuthMiddleware, userController.create)
router.get('/users/:userId', AuthMiddleware, userController.detail)
router.put('/users/:userId', AuthMiddleware, userController.update)
router.delete('/users/:userId', AuthMiddleware, userController.delete)

module.exports = router