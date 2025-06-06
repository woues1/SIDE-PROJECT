const Projects = require('../models/projectModel')
const Skills = require('../models/skillsModel')

const getAllProjects = async (req, res) => {
    try {
        const result = await Projects.findProjects()
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Error fetching projects' });
    }
}

const getAllSkills = async (req, res) => {
    try {
        const result = await Skills.findSkills()
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Error fetching projects' });
    }

}

module.exports = { 
    getAllProjects,
    getAllSkills
};