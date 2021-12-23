//Schema - instanciar classe JS
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        requireD: true,
    },
    liked: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Video", videoSchema);