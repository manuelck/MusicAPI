const updateDocument = require("./updatehelper");
const { preventDuplicates } = require('../../utils/utils');
const Genre = require("../models/genres");

const getGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        return res.status(200).json(genres);
    } catch (error) {
        return res.status(500).json("Error fetching genres: " + error.message);
    }
};

const getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        return res.status(200).json(genre);
    } catch (error) {
        return res.status(400).json("Error fetching genre: " + error.message);
    }
};

const postGenre = async (req, res) => {
    try {
        const newGenre = new Genre(req.body);
        const savedGenre = await newGenre.save();
        return res.status(201).json(savedGenre);
    } catch (error) {
        return res.status(400).json("Error creating genre: " + error.message);
    }
};

const putGenre = async (req, res) => {
    try {
        const updatedGenre = await updateDocument(Genre, req.params.id, req.body, preventDuplicates);
        return res.status(200).json(updatedGenre);
    } catch (error) {
        return res.status(400).json("Error updating genre: " + error.message);
    }
};

const deleteGenre = async (req, res) => {
    try {
        await Genre.findByIdAndDelete(req.params.id);
        return res.status(200).json("Genre deleted successfully");
    } catch (error) {
        return res.status(400).json("Error deleting genre: " + error.message);
    }
};

module.exports = {
    getGenres,
    getGenreById,
    postGenre,
    putGenre,
    deleteGenre,
};
