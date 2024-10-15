const { 
    getGenres,
    getGenreById,
    postGenre,
    putGenre,
    deleteGenre,
} = require("../controllers/genres");

const genresRouter = require("express").Router();

genresRouter.get("/", getGenres);
genresRouter.get("/:id", getGenreById);
genresRouter.post("/", postGenre);
genresRouter.put("/:id", putGenre);
genresRouter.delete("/:id", deleteGenre);

module.exports = genresRouter;
