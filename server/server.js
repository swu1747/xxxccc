const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(4090, () => {
    console.log('lisening on 4090')
})