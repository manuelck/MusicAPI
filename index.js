require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/config/db");
const songsRouter = require("./src/api/routes/songs");
const artistsRouter = require("./src/api/routes/artists");
const genresRouter = require("./src/api/routes/genres");

const app = express();

app.use(express.json())

connectDB()

app.use("/api/v1/songs", songsRouter);      
app.use("/api/v1/genres", genresRouter);    
app.use("/api/v1/artists", artistsRouter); 



app.use("*", (req, res, next) =>{
    return res.status(404).json("Route Not Found")
});

app.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000");
});
