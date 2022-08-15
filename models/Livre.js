import mongoose, { model } from "mongoose";


const LivreSchema = new mongoose.Schema({
    name: String,
    auteur: String,
    createdAt: {
        type: Date,
        default: new Date (),
    }
})

module.exports = mongoose.models.Client || mongoose.model('Livre', LivreSchema);