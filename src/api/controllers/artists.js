const updateDocument = require("./updatehelper");
const { preventDuplicates } = require('../../utils/utils');
const Artist = require("../models/artist");

const getArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        return res.status(200).json(artists);
    } catch (error) {
        return res.status(500).json("Error fetching artists: " + error.message);
    }
};

const getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        return res.status(200).json(artist);
    } catch (error) {
        return res.status(400).json("Error fetching artist: " + error.message);
    }
};

const postArtist = async (req, res) => {
    try {
        const newArtist = new Artist(req.body);
        const savedArtist = await newArtist.save();
        return res.status(201).json(savedArtist);
    } catch (error) {
        return res.status(400).json("Error creating artist: " + error.message);
    }
};

const putArtist = async (req, res) => {
    try {
        const updatedArtist = await updateDocument(Artist, req.params.id, req.body, preventDuplicates);
        return res.status(200).json(updatedArtist);
    } catch (error) {
        return res.status(400).json("Error updating artist: " + error.message);
    }
};

const deleteArtist = async (req, res) => {
    try {
        await Artist.findByIdAndDelete(req.params.id);
        return res.status(200).json("Artist deleted successfully");
    } catch (error) {
        return res.status(400).json("Error deleting artist: " + error.message);
    }
};

module.exports = {
    getArtists,
    getArtistById,
    postArtist,
    putArtist,
    deleteArtist,
};
