const express = require('express')
const { authenticate, checkRefreshToken } = require('../middleware/auth');
const { validateSkill } = require('../middleware/validateSkill')
const {
    adminLogin,
    createProject,
    addSkill
} = require('../controllers/adminController')

const router = express.Router()


//POST routes
router.post('/login', adminLogin)

router.use(authenticate)
router.use(checkRefreshToken)
//checks for frontend
router.post('/addskill', addSkill);
router.post('/create/project', createProject)
// GET routes   
router.get('/dashboard', (req, res) => {
    res.json({ message: 'You have access to this route!', user: req.user });
});

// router.post('/admin/createAdmin', createAdmin)

// Delete routes

//route.delete('/delete/project')

// update routes

//router.put('/edit/project')

router.post('/token/validate');


module.exports = router;