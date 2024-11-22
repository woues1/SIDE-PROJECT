const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/dev_tests')
    console.log(`Connected to database`)
}

module.exports = connectDB;