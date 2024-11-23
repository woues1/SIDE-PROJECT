const express = require('express')
const { authenticate, checkRefreshToken } = require('../middleware/auth');

const {
    adminLogin,
    createProject
} = require('../controllers/adminController')

const router = express.Router()


//POST routes
router.post('/admin/login', adminLogin)

router. post('/admin/create/project', createProject)

router.post('/logout', (req, res) => {
    res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'Strict' });
    res.sendStatus(204)
});

//checks for frontend
router.post('/token/validate', authenticate)

router.post('/token/validate/refresh', checkRefreshToken, (req, res) => {
    console.log('Success')
})

// router.post('/admin/signup', adminSignup)


// GET routes
router.get('/admin/dashboard', authenticate, checkRefreshToken, (req, res) => {
    res.json({ message: 'You have access to this route!', user: req.user });
});

// Delete routes


// update routes

module.exports = router;