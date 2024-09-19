const express = require ("express"); //import same as on react
const { getMovies, getMoviesById, insertMovies, editMovies, deleteMovies } = require("../controllers/movies");
const { getStudioFilm } = require("../controllers/studios");
const router = express.Router();

//movie
router.get('/movie', getMovies )
router.get('/movie/:id', getMoviesById )
router.post('/movie', insertMovies )
router.patch('/movie/:id', editMovies )
router.delete('/movie/:id', deleteMovies )

//studioFilm
router.get('/studioFilm', getStudioFilm)



module.exports = router