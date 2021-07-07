const path = require('path')
const photoModel = require('../models/photos.js')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'addPhoto.html'))
}

const POST = (req, res) => {
    photoModel.addPhoto(req.body)
    res.redirect('/photos/photo/add')
}

module.exports = {GET, POST}