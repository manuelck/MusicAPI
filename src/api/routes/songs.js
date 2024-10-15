const { 
    getSongs,
    getSongById,
    postSong,
    putSong,
    deleteSong,
} = require("../controllers/songs");

const songsRouter = require("express").Router();

songsRouter.get("/", getSongs);
songsRouter.get("/:id", getSongById);
songsRouter.post("/", postSong);
songsRouter.put("/:id", putSong);
songsRouter.delete("/:id", deleteSong);

module.exports = songsRouter;
