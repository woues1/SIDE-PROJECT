const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tokenSchema = new Schema({
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '7d' },
    adminId: { type: Schema.Types.ObjectId, ref: 'Admin', required: true } // Reference to Admin
});

module.exports = mongoose.model('Token', tokenSchema);