const express = require('express')
const { getAllProjects, getAllSkills } = require('../controllers/visitorController')
const router = express.Router()


router.get('/projects', getAllProjects)
router.get('/skills', getAllSkills)

module.exports = router;