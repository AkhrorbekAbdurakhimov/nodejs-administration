const fs = require('fs')
const path = require('path')

const getImages = () => require('./../database/images.json')

const getOneImage = (id) => {
    const images = require('./../database/images.json')
    let found = images.find(image => image.photo_id == id)
    return found
}

const addPhoto = (photo) => {
    const photos = require('./../database/images.json')
    const photoId = photos.length ? photos[photos.length - 1].photo_id + 1 : 1
    photos.push({
        photo_id: photoId,
        ... photo
    })
    fs.writeFileSync(path.join(__dirname, '..', 'database', 'images.json'), JSON.stringify(photos, null, 4))
} 

module.exports = {addPhoto, getImages, getOneImage}