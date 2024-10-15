const updateDocument = require("./updatehelper");
const { preventDuplicates } = require('../../utils/utils');
const Song = require("../models/songs");

const getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        return res.status(200).json(songs);
    } catch (error) {
        return res.status(500).json("Error fetching songs: " + error.message);
    }
};

const getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        return res.status(200).json(song);
    } catch (error) {
        return res.status(400).json("Error fetching song: " + error.message);
    }
};

const postSong = async (req, res) => {
    try {
        const newSong = new Song(req.body);
        const savedSong = await newSong.save();
        return res.status(201).json(savedSong);
    } catch (error) {
        return res.status(400).json("Error creating song: " + error.message);
    }
};

const putSong = async (req, res) => {
    try {
        const updatedSong = await updateDocument(Song, req.params.id, req.body, preventDuplicates);
        return res.status(200).json(updatedSong);
    } catch (error) {
        return res.status(400).json("Error updating song: " + error.message);
    }
};

const deleteSong = async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.params.id);
        return res.status(200).json("Song deleted successfully");
    } catch (error) {
        return res.status(400).json("Error deleting song: " + error.message);
    }
};

module.exports = {
    getSongs,
    getSongById,
    postSong,
    putSong,
    deleteSong,
};
