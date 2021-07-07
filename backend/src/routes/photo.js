const express = require('express')
const path = require('path')
const addPhotoRoute = require('./addPhoto')

// controllers
const photoController = require('./../controllers/photo')

const photoRoute = express.Router()

// middlewares
photoRoute.use(express.static(path.join(__dirname, '..', 'public')))
photoRoute.use('/add', addPhotoRoute)

photoRoute.get('/', photoController.GET)

module.exports = photoRoute