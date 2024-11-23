const express = require('express')
const { getAllProjects } = require('../controllers/visitorController')
const router = express.Router()


router.get('/projects', getAllProjects)


module.exports = router;