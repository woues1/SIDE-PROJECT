const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String, required: true}
})


projectSchema.statics.findProjects = async function () {
    
    const project = await this.find({})
    if(!project){
        throw Error('No Projects available')
    }
    return project
}

module.exports = mongoose.model('Projects', projectSchema);