const path = require('path')
const categoryModel = require('./../models/categories')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'category.html'))
}

const CATEGORIES = (req, res) => {
    res.status(200).json(categoryModel.getCategories())
}

module.exports = {GET, CATEGORIES}