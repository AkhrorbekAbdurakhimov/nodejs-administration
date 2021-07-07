const express = require('express')

// controllers
const addPhotoController = require('./../controllers/addPhoto')

const addPhotoRoute = express.Router()

addPhotoRoute.use(express.urlencoded({extended: true}))

addPhotoRoute.get('/', addPhotoController.GET)
addPhotoRoute.post('/', addPhotoController.POST)

module.exports = addPhotoRoute