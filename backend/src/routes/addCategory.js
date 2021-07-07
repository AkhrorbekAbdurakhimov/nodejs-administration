const express = require('express')

// controllers
const addCategoryController = require('./../controllers/addCategory')

const addCategoryRoute = express.Router()

addCategoryRoute.use(express.urlencoded({extended: true}))

addCategoryRoute.get('/', addCategoryController.GET)
addCategoryRoute.post('/', addCategoryController.POST)

module.exports = addCategoryRoute