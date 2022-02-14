const express = require('express')
const router = express.Router()

const homeController = require('./controllers/home-controller')
const userController = require('./controllers/user-controller')

// GET method route
router.get('/', homeController.index)

router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/:userId', userController.detail)
router.put('/users/:userId', userController.update)
router.delete('/users/:userId', userController.delete)

module.exports = router