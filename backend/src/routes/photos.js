const express = require('express')
const path = require('path')
const categoryRoute = require('./category')
const photoRoute = require('./photo')

// controllers
const photosController = require('./../controllers/photos')

const photosRoute = express.Router()

// middlewares
photosRoute.use(express.static(path.join(__dirname, '..', 'public')))
photosRoute.use('/category', categoryRoute)
photosRoute.use('/photo', photoRoute)

photosRoute.get('/', photosController.GET)

module.exports = photosRoute