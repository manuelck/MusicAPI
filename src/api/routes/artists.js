const { 
    getArtists,
    getArtistById,
    postArtist,
    putArtist,
    deleteArtist,
} = require("../controllers/artists");

const artistsRouter = require("express").Router();

artistsRouter.get("/", getArtists);
artistsRouter.get("/:id", getArtistById);
artistsRouter.post("/", postArtist);
artistsRouter.put("/:id", putArtist);
artistsRouter.delete("/:id", deleteArtist);

module.exports = artistsRouter;
