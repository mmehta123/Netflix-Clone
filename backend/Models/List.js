const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true }
)

module.exports = mongoose.model("List", ListSchema);