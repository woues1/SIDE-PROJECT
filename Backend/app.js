require('dotenv').config()
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes')
const visitorRoutes = require('./routes/visitorRoutes')
const cookieParser = require('cookie-parser');

const app = express()
const port=process.env.PORT || 3001;
connectDB();


app.use(cors())
app.use(cookieParser());
app.use(express.json())
app.use('/api/admin', adminRoutes)
app.use('/api', visitorRoutes)

//global routes:
app.post('/api/logout', (req, res) => {
    res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'Strict' });
    res.sendStatus(204)
});

app.get('/', (req, res) => res.send('API Running!'));
app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    next();
});
app.listen(3000);