const ip = require('./lib/getIp.js')

// const host = ip({internal: false})
const host = 'localhost'
const PORT = process.env.PORT || 7000

module.exports = {host, PORT}