const express = require('express')
const path = require('path')
const addCategoryRoute = require('./addCategory')

// controllers
const categoryController = require('./../controllers/category')

const categoryRoute = express.Router()

// middlewares
categoryRoute.use(express.static(path.join(__dirname, '..', 'public')))
categoryRoute.use('/add', addCategoryRoute)

categoryRoute.get('/', categoryController.GET)

module.exports = categoryRoute