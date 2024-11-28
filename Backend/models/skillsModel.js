const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    skill: {
        type: String,
        required: true,
        unique: true,   
        trim: true      
    },
    level: {
        type: String,
        required: true
    }
});

SkillSchema.statics.findSkills = async function () {
    try {
        const skills = await this.find({});
        if (skills.length === 0) {
            throw new Error('No skills available');
        }
        return skills;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports =  mongoose.model('Skills', SkillSchema);