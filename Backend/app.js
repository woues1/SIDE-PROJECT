require('dotenv').config()
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes')
const cookieParser = require('cookie-parser');

const app = express()
const port=process.env.PORT || 3001;
connectDB();


app.use(cookieParser());
app.use(cors())
app.use(express.json())
app.use('/api', adminRoutes)
app.get('/', (req, res) => res.send('API Running!'));
app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    next();
});
app.listen(3000);