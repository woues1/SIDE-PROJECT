const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    refreshToken: { type: Schema.Types.ObjectId, ref: 'Token' } // Reference to Token
}, { timestamps: true });

adminSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const admin = await this.findOne({ email })
    if(!admin){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, admin.password)

    if(!match){
        throw Error('Incorrect password')
    }
    return admin
}

module.exports = mongoose.model('Admin', adminSchema);