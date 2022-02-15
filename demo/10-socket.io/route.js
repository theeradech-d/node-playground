const express = require('express')
const router = express.Router()

const homeController = require('./controllers/home-controller')
const userController = require('./controllers/user-controller')
const authController = require('./controllers/auth-controller')
const notificationController = require('./controllers/notification-controller')

const AuthMiddleware = require('./middewares/auth-middleware')

// GET method route
router.get('/', homeController.index)

router.get('/login', authController.loginForm)
router.post('/login', authController.login)
router.get('/my-profile', authController.myProfile)
router.get('/profile', AuthMiddleware, authController.profile)

router.get('/notification/send/:userId', notificationController.send)

router.get('/users', AuthMiddleware, userController.index)
router.post('/users', AuthMiddleware, userController.create)
router.get('/users/:userId', AuthMiddleware, userController.detail)
router.put('/users/:userId', AuthMiddleware, userController.update)
router.delete('/users/:userId', AuthMiddleware, userController.delete)

module.exports = router