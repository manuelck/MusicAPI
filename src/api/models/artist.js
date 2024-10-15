const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
    collection: "artists"
});

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
