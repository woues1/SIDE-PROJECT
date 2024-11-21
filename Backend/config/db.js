const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.SERVER)
    console.log(`Connected to database`)
}

module.exports = connectDB;