require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()



// Connect DB
const db = require('./db')
db.connect()


// Require Component
const auth = require('./routes/auth')


// app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello world')
})


app.use('/api/auth', auth)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App Start At PORT ${PORT}`);
})
