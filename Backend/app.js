require('dotenv').config()
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors')

const app = express()

const port=process.env.PORT || 3001;
connectDB();

app.use(cors())
app.use(express.json())

app.use(customMiddleware.requestLogger);

app.get('/', (req, res) => res.send('API Running!'));