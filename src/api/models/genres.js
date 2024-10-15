const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true,
    collection: "genres"
});

const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;
