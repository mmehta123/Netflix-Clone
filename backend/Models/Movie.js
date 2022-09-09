const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
    isSeries: { type: Boolean, default: false }
}, { timestamps:true,versionKey: false }
)

module.exports = mongoose.model("Movie", MovieSchema);