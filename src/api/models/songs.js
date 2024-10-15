const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true }, 
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true }, 
    album: { type: String, required: true },
    duration: { type: Number, required: true }, 
    releaseDate: { type: Date, required: true },
}, {
    timestamps: true,
    collection: "songs"
});

const Song = mongoose.model("Song", songSchema);
module.exports = Song;
