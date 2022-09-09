const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
}, { timestamps: true }
)

module.exports = mongoose.model("Movie", MovieSchema);