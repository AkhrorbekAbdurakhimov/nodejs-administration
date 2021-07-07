const path = require('path')
const photosModel = require('./../models/photos')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'photo.html'))
}

const IMAGES = (req, res) => {
    res.status(200).json(photosModel.getImages())
}

const IMAGES_ONE = (req, res) => {
    res.status(200).json(photosModel.getOneImage(req.params.id))
}

module.exports = {GET, IMAGES, IMAGES_ONE}