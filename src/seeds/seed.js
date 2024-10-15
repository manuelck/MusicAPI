require("dotenv").config();
const mongoose = require("mongoose");
const Artist = require("../api/models/artist");
const Genre = require("../api/models/genres");
const Song = require("../api/models/songs");

const connectDB = async () => {
    try {
        console.log("Connecting to the database...");
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
};

const seedData = async () => {
    const artists = [
        { 
            name: "Slipknot", 
            bio: "American heavy metal band known for their aggressive style.",
            image: "https://e.rpp-noticias.io/xlarge/2023/12/31/114111_1519777.webp"
        },
        { 
            name: "Green Day", 
            bio: "American punk rock band known for their energetic performances.",
            image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-7276-20121007-greenday-env-thumb-624x420-1349717589.jpg" 
        },
        { 
            name: "Suicideboys", 
            bio: "American hip hop duo known for their dark, gritty lyrics.",
            image: "https://s1.ticketm.net/dam/a/480/3d5f9fc2-7d56-44d4-a7b4-673ef130c480_RETINA_PORTRAIT_3_2.jpg" 
        },
        { 
            name: "Bring Me The Horizon", 
            bio: "British rock band known for their genre-blending style.",
            image: "https://i0.wp.com/www.rockzonemag.com/wp-content/uploads/2023/06/Bring-Me-The-Horizon-foto-news-2023.jpg"
        },
        { 
            name: "Poorstacy", 
            bio: "Rapper and musician known for his fusion of punk and hip-hop.",
            image: "https://i.ytimg.com/vi/bxCvynlyVbc/maxresdefault.jpg"
        },
    ];

    const genres = [
        { name: "Rock" },
        { name: "Punk" },
        { name: "Metal" },
        { name: "Hip-Hop" },
    ];

    const songs = [
        { title: "Duality", artist: null, genre: null, duration: 270, releaseDate: "2004-05-25", album: "Vol. 3: (The Subliminal Verses)" },
        { title: "Boulevard of Broken Dreams", artist: null, genre: null, duration: 260, releaseDate: "2004-09-29", album: "American Idiot" },
        { title: "KillUrSelf Pt. 2", artist: null, genre: null, duration: 205, releaseDate: "2018-09-07", album: "I Want to Die in New Orleans" },
        { title: "Avalanche", artist: null, genre: null, duration: 260, releaseDate: "2022-01-15", album: "Post Human: Survival Horror" },
        { title: "Live Life", artist: null, genre: null, duration: 200, releaseDate: "2021-03-15", album: "The Eternal" },
    ];

    await Artist.deleteMany();
    await Genre.deleteMany();
    await Song.deleteMany();

    const insertedArtists = await Artist.insertMany(artists);
    console.log("Artists inserted");

    const insertedGenres = await Genre.insertMany(genres);
    console.log("Genres inserted");

    songs[0].artist = insertedArtists[0]._id;
    songs[0].genre = insertedGenres[2]._id;
    songs[1].artist = insertedArtists[1]._id;
    songs[1].genre = insertedGenres[1]._id;
    songs[2].artist = insertedArtists[2]._id;
    songs[2].genre = insertedGenres[3]._id;
    songs[3].artist = insertedArtists[3]._id;
    songs[3].genre = insertedGenres[0]._id;
    songs[4].artist = insertedArtists[4]._id;
    songs[4].genre = insertedGenres[3]._id;

    await Song.insertMany(songs);
    console.log("Songs inserted successfully");
};

const runSeed = async () => {
    await connectDB();
    await seedData();
    mongoose.connection.close();
};

runSeed().catch((error) => console.error("Error running the seed:", error));
