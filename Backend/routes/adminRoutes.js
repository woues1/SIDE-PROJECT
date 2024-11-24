const express = require('express')
const { authenticate, checkRefreshToken } = require('../middleware/auth');

const {
    adminLogin,
    createProject
} = require('../controllers/adminController')

const router = express.Router()

//POST routes
router.post('/login', adminLogin)

//checks for frontend
router.use(authenticate)
router.use(checkRefreshToken)

router.post('/token/validate', (req, res) => {
    res.status(200).json({message: 'valid token'})
});

router.post('/create/project', createProject)

// router.post('/admin/createAdmin', createAdmin)


// GET routes   
router.get('/dashboard', authenticate, checkRefreshToken, (req, res) => {
    res.json({ message: 'You have access to this route!', user: req.user });
});

// Delete routes

//route.delete('/delete/project')

// update routes

//router.put('/edit/project')

module.exports = router;