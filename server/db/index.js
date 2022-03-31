const mongoose = require('mongoose');
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-app.lj6p0.mongodb.net/mern-app?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                UseUnifiedTopology: true
            }
        )

        console.log(`Connect DB success!`);
    } catch (error) {
            console.log(`Fail connected`);
            process.exit(1)
    }
}

module.exports = { connect }
