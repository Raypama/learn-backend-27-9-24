const express = require ("express"); //import same as on react
const { getMovies, getMoviesById, insertMovies, editMovies, deleteMovies } = require("../controllers/movies");
const { getStudiosFilm, getStudiosById, insertStudios, deleteStudios } = require("../controllers/studios");
const { getTheater, getTheaterById, insertheater } = require("../controllers/theater");
const { getUser, getUserById, insertUser } = require("../controllers/user");
const {  getTransaction, getTransactionById, insertTransaction } = require("../controllers/transaction");
const { validateMovie } = require("../validators/validatorsMovies");
const { validateStudio } = require("../validators/validatorsStudios");
const router = express.Router();

router.get('/', (req,res) => {
    res.send("hello world")
})

//movie
router.get('/movie', getMovies )
router.get('/movie/:id', getMoviesById )
router.post('/movie', validateMovie ,insertMovies )
router.patch('/movie/:id', editMovies )
router.delete('/movie/:id', deleteMovies )

//studioFilm
router.get('/studiosFilm', getStudiosFilm ) 
router.get('/studiosFilm/:id', getStudiosById ) 
router.post('/studiosFilm', validateStudio , insertStudios )
router.delete('/studiosFilm/:id', deleteStudios )

//theater
router.get('/theater', getTheater)
router.get('/theater/:id', getTheaterById) 
router.post('/theater', insertheater )
// router.delete('/studioFilm/:id', deleteStudios )

//user
router.get('/user',getUser ) 
router.get('/user/:id', getUserById) 
router.post('/user', insertUser )
// router.delete('/studioFilm/:id', deleteUser )

//transaction
router.get('/transaction', getTransaction) 
router.get('/transaction/:id', getTransactionById) 
router.post('/transaction', insertTransaction )
// router.delete('/studioFilm/:id', deleteTransaction )



module.exports = router