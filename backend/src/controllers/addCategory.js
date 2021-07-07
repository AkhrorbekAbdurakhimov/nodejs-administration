const path = require('path')
const categoryModel = require('./../models/categories')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'addCategory.html'))
}

const POST = (req, res) => {
    categoryModel.addCategory(req.body)
    res.redirect('/photos/category/add')
}

module.exports = {GET, POST}