const express = require('express')
const app = express()
const path = require('path')
const photosRoute = require('./routes/photos')

const {host, PORT} = require('./config')

// middlewares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
app.use(express.static(path.join(__dirname, 'public')))

// controllers
const homeController = require('./controllers/home')
const categoryController = require('./controllers/category')
const photoController = require('./controllers/photo')

// home
app.get('/', homeController.GET)
app.get('/categories', categoryController.CATEGORIES)
app.get('/images', photoController.IMAGES)
app.get('/images/:id', photoController.IMAGES_ONE)

// photos
app.use("/photos", photosRoute)

app.listen(PORT, () => console.log(`server is running on http://${host}:${PORT}`))