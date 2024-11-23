const express = require('express')
const { authenticate, checkRefreshToken } = require('../middleware/auth');

const {
    adminLogin,
    adminSignup
} = require('../controllers/adminController')

const router = express.Router()

router.post('/admin/login', adminLogin)

router.get('/admin/dashboard', authenticate, checkRefreshToken, (req, res) => {
    res.json({ message: 'You have access to this route!', user: req.user });
});

router.post('/token/validate', authenticate)
router.post('/token/validate/refresh', checkRefreshToken)

// router.post('/admin/signup', adminSignup)



module.exports = router;